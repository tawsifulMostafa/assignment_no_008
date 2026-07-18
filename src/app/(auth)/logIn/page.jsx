import { Suspense } from "react";
import LoginForm from "./LoginForm";
 

const logInPage = () => {
    return (
        <Suspense fallback="loading..........">
             <LoginForm></LoginForm>
        </Suspense>
    );
};

export default logInPage;