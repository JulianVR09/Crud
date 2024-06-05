import { HomePage } from "./scenes/public/home";
import { LoginPage } from "./scenes/public/login/login.page";
import { NotFoundPage } from "./scenes/public/not-found";
import { RegisterPage } from "./scenes/public/register";

export const routes = {
    public: [
        {path: '/', page: HomePage},
        {path: '/not-found', page: NotFoundPage},
        {path: '/register', page: RegisterPage},
        {path:'/login', page: LoginPage},
    ],
    private:[

    ]
}