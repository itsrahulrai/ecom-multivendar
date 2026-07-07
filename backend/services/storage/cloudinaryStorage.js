import cloudinary from "../../config/cloudinary.js";
import streamifier from "streamifier";

class CloudinaryStorage {
    async upload(file, folder = "uploads") {
        if (!file) {
            throw new Error("No file provided");
        }

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder,
                    resource_type: "image",
                },
                (error, result) => {
                    if (error) return reject(error);

                    resolve({
                        url: result.secure_url,
                        fileId: result.public_id,
                        provider: "cloudinary",
                    });
                }
            );

            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }

    async delete(fileId) {
        if (!fileId) return;

        return cloudinary.uploader.destroy(fileId);
    }
}

export default new CloudinaryStorage();