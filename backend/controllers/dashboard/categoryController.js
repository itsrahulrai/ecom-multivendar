import storage from "../../services/storage/index.js";
import CategoryModel from "../../models/categoryModel.js";
import { responsReturn } from "../../utiles/response.js";
import slugify from "slugify";

class categoryController {

    // getCategory =  async (req, res) => {
    //     const {page, searchValue,perPage} = req.query
    //     const skipPage = parseInt(perPage) * (parseInt(page) -1)
    //     try {
    //         if(searchValue && page && perPage){
    //             const categorys = await CategoryModel.find({$text:{$search:searchValue}})
    //             .skip(skipPage).limit(perPage).sort({createdAt: -1})
    //             const totalCategory = await CategoryModel.find({$text:{$search:searchValue}}).countDocuments()
    //             responsReturn(res,200,{categorys,totalCategory})
    //         }
    //         else if(searchValue === ''&& page && perPage ) {
    //             const categorys = await CategoryModel.find({})
    //             .skip(skipPage).limit(perPage).sort({createdAt: -1})
    //               const totalCategory = await CategoryModel.find({}).countDocuments()
    //             responsReturn(res,200,{categorys,totalCategory})
    //         }
    //         else {
    //             const categorys = await CategoryModel.find({}).sort({createdAt: -1})
    //              const totalCategory = await CategoryModel.find({}).countDocuments()
    //             responsReturn(res,200,{categorys,totalCategory})  
    //         }
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }


    getCategory = async (req, res) => {
        try {
            const page = Math.max(parseInt(req.query.page) || 1, 1);
            const perPage = Math.max(parseInt(req.query.perPage) || 10, 1);
            const searchValue = (req.query.searchValue || "").trim();

            const filter = {};

            if (searchValue) {
            filter.$text = { $search: searchValue };
            }

            const totalCategory = await CategoryModel.countDocuments(filter);

            const totalPages = Math.ceil(totalCategory / perPage);
            const skip = (page - 1) * perPage;

            const categorys = await CategoryModel.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(perPage)
            .lean();

            return res.status(200).json({
            success: true,
            categorys,
            pagination: {
                page,
                perPage,
                totalItems: totalCategory,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
            });
        } catch (error) {
            console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

   addcategory = async (req, res) => {
    let uploadedImage;
    try {
        const { name, status } = req.body;
        if (!name?.trim()) {
            return responsReturn(res, 400, {
                error: "Category name is required",
            });
        }
        if (!req.file) {
            return responsReturn(res, 400, {
                error: "Image is required",
            });
        }
        const slug = slugify(name, {
            lower: true,
            strict: true,
            trim: true,
        });
        const exists = await CategoryModel.findOne({
            $or: [{ name: name.trim() }, { slug }],
        });
        if (exists) {
            return responsReturn(res, 409, {
                error: "Category already exists",
            });
        }
        uploadedImage  = await storage.upload(req.file, "categories");
        const category = await CategoryModel.create({
            name: name.trim(),
            slug,
            status,
            image: uploadedImage.url,
            imageId: uploadedImage.fileId,
        });

        return responsReturn(res, 201, {
            category,
            message: "Category added successfully",
        });

    } catch (error) {
        if (uploadedImage?.fileId) {
            await storage.delete(uploadedImage.fileId);
        }
        return responsReturn(res, 500, {
            error: error.message,
        });
    }
    }

}

export default new categoryController();
