class AuthService {
    async adminLogin(data) {
        console.log(data);

        // later: DB + validation + JWT

        return {
            success: true,
            message: "Admin login working"
        };
    }
}

export default new AuthService();