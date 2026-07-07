import {
    S3Client,
    DeleteObjectCommand,
} from "@aws-sdk/client-s3";

import { Upload } from "@aws-sdk/lib-storage";
import { randomUUID } from "crypto";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
});

class S3Storage {
    async upload(file, folder = "uploads") {
        if (!file) {
            throw new Error("No file provided");
        }

        const extension = file.originalname.split(".").pop();
        const fileId = `${folder}/${randomUUID()}.${extension}`;

        const upload = new Upload({
            client: s3,
            params: {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileId,
                Body: file.buffer,
                ContentType: file.mimetype,
            },
        });

        await upload.done();

        return {
            url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileId}`,
            fileId,
            provider: "s3",
        };
    }

    async delete(fileId) {
        if (!fileId) return;

        await s3.send(
            new DeleteObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileId,
            })
        );
    }
}

export default new S3Storage();