import storage from "../../services/storage/index.js";
import CategoryModel from "../../models/categoryModel.js";
import { responsReturn } from "../../utiles/response.js";
import slugify from "slugify";

class categoryController {

    getCategory =  async (req, res) => {
        const {page, searchValue,perPage} = req.query
        const skipPage = parseInt(perPage) * (parseInt(page) -1)
        try {
            if(searchValue){
                const categorys = await CategoryModel.find({$text:{$search:searchValue}})
                .skip(skipPage).limit(perPage).sort({createdAt: -1})
                const totalCategory = await CategoryModel.find({$text:{$search:searchValue}}).countDocuments()
                responsReturn(res,200,{categorys,totalCategory})
            } else {
                const categorys = await CategoryModel.find({}).skip(skipPage).limit(perPage).sort({createdAt: -1})
                 const totalCategory = await CategoryModel.find({}).countDocuments()
                 
            }
        } catch (error) {
            
        }
    }


async addcategory(req, res) {
    let uploaded;
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
