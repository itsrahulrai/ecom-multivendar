import storage from "../../services/storage/index.js";
import CategoryModel from "../../models/categoryModel.js";
import { responsReturn } from "../../utiles/response.js";
import slugify from "slugify";

class categoryController {

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
    }

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


    updateCategory = async (req, res) => {
    let uploadedImage;

    try {
        const { id } = req.params;
        const { name, status } = req.body;

        const category = await CategoryModel.findById(id);

        if (!category) {
            return responsReturn(res,404,{
                error: "Category not found"
            });
        }

        const slug = slugify(name,{
            lower:true,
            strict:true,
            trim:true
        });

        const exists = await CategoryModel.findOne({
            _id: { $ne: id },
            $or:[
                { name:name.trim() },
                { slug }
            ]
        });

        if(exists){
            return responsReturn(res,409,{
                error:"Category already exists"
            });
        }

        let image = category.image;
        let imageId = category.imageId;

        if(req.file){

            uploadedImage = await storage.upload(req.file,"categories");

            if(category.imageId){
                await storage.delete(category.imageId);
            }

            image = uploadedImage.url;
            imageId = uploadedImage.fileId;
        }

        category.name = name.trim();
        category.slug = slug;
        category.status = status;
        category.image = image;
        category.imageId = imageId;

        await category.save();

        return responsReturn(res,200,{
            message:"Category updated successfully",
            category
        });

    } catch(error){

        if(uploadedImage?.fileId){
            await storage.delete(uploadedImage.fileId);
        }

        return responsReturn(res,500,{
            error:error.message
        });
    }
    }


    deleteCategory = async(req,res)=>{

    try{

        const { id } = req.params;

        const category = await CategoryModel.findById(id);

        if(!category){
            return responsReturn(res,404,{
                error:"Category not found"
            });
        }

        if(category.imageId){
            await storage.delete(category.imageId);
        }

        await CategoryModel.findByIdAndDelete(id);

        return responsReturn(res,200,{
            message:"Category deleted successfully"
        });

    }catch(error){

        return responsReturn(res,500,{
            error:error.message
        });

    }

    }

}

export default new categoryController();
