class AuthControllers {
    async admin_login(req, res) {
        console.log(req.body);
        res.send("Admin login working");
    }
}

export default new AuthControllers();