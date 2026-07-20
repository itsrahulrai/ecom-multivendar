import storage from "../../services/storage/index.js";
import BrandModel from "../../models/brandModel.js";
import { responsReturn } from "../../utiles/response.js";
import slugify from "slugify";

class BrandController {


  // ==========================
  // Get Brands
  // ==========================
  getBrand = async (req, res) => {
    try {
      const page = Math.max(parseInt(req.query.page) || 1, 1);
      const perPage = Math.max(parseInt(req.query.perPage) || 10, 1);
      const searchValue = (req.query.searchValue || "").trim();

      const filter = {};

      if (searchValue) {
        filter.$text = {
          $search: searchValue,
        };
      }

      const totalBrand = await BrandModel.countDocuments(filter);

      const totalPages = Math.ceil(totalBrand / perPage);

      const skip = (page - 1) * perPage;

      const brands = await BrandModel.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(perPage)
        .lean();

      return res.status(200).json({
        success: true,
        brands,
        pagination: {
          page,
          perPage,
          totalItems: totalBrand,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      });
    } catch (error) {
      return responsReturn(res, 500, {
        error: error.message,
      });
    }
  };


    // ==========================
  // Add Brand
  // ==========================
  addBrand = async (req, res) => {
    let uploadedImage;

    try {
      const { name, status } = req.body;

      if (!name?.trim()) {
        return responsReturn(res, 400, {
          error: "Brand name is required",
        });
      }

      if (!req.file) {
        return responsReturn(res, 400, {
          error: "Brand image is required",
        });
      }

      const slug = slugify(name, {
        lower: true,
        strict: true,
        trim: true,
      });

      const exists = await BrandModel.findOne({
        $or: [
          { name: name.trim() },
          { slug },
        ],
      });

      if (exists) {
        return responsReturn(res, 409, {
          error: "Brand already exists",
        });
      }

      uploadedImage = await storage.upload(req.file, "brands");

      const brand = await BrandModel.create({
        name: name.trim(),
        slug,
        status,
        image: uploadedImage.url,
        imageId: uploadedImage.fileId,
      });

      return responsReturn(res, 201, {
        brand,
        message: "Brand added successfully",
      });
    } catch (error) {
      if (uploadedImage?.fileId) {
        await storage.delete(uploadedImage.fileId);
      }

      return responsReturn(res, 500, {
        error: error.message,
      });
    }
  };

  // ==========================
  // Update Brand
  // ==========================
  updateBrand = async (req, res) => {
    let uploadedImage;

    try {
      const { id } = req.params;
      const { name, status } = req.body;

      const brand = await BrandModel.findById(id);

      if (!brand) {
        return responsReturn(res, 404, {
          error: "Brand not found",
        });
      }

      const slug = slugify(name, {
        lower: true,
        strict: true,
        trim: true,
      });

      const exists = await BrandModel.findOne({
        _id: { $ne: id },
        $or: [
          { name: name.trim() },
          { slug },
        ],
      });

      if (exists) {
        return responsReturn(res, 409, {
          error: "Brand already exists",
        });
      }

      let image = brand.image;
      let imageId = brand.imageId;

      if (req.file) {
        uploadedImage = await storage.upload(req.file, "brands");

        if (brand.imageId) {
          await storage.delete(brand.imageId);
        }

        image = uploadedImage.url;
        imageId = uploadedImage.fileId;
      }

      brand.name = name.trim();
      brand.slug = slug;
      brand.status = status;
      brand.image = image;
      brand.imageId = imageId;

      await brand.save();

      return responsReturn(res, 200, {
        message: "Brand updated successfully",
        brand,
      });
    } catch (error) {
      if (uploadedImage?.fileId) {
        await storage.delete(uploadedImage.fileId);
      }

      return responsReturn(res, 500, {
        error: error.message,
      });
    }
  };

  // ==========================
  // Delete Brand
  // ==========================
  deleteBrand = async (req, res) => {
    try {
      const { id } = req.params;

      const brand = await BrandModel.findById(id);

      if (!brand) {
        return responsReturn(res, 404, {
          error: "Brand not found",
        });
      }

      if (brand.imageId) {
        await storage.delete(brand.imageId);
      }

      await BrandModel.findByIdAndDelete(id);

      return responsReturn(res, 200, {
        message: "Brand deleted successfully",
      });
    } catch (error) {
      return responsReturn(res, 500, {
        error: error.message,
      });
    }
  };
}

export default new BrandController();