export const responsReturn = (res, code, data) => {
    return res.status(code).json(data);
};