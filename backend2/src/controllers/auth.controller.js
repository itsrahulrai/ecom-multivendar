import authService from "../services/auth.service.js";

class AuthController {
    async adminLogin(req, res, next) {
        try {
            const result = await authService.adminLogin(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();