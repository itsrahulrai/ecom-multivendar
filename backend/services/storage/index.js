import cloudinaryStorage from "./cloudinaryStorage.js";
import s3Storage from "./s3Storage.js";

const storage =
    process.env.STORAGE_DRIVER === "s3"
        ? s3Storage
        : cloudinaryStorage;

export default storage;