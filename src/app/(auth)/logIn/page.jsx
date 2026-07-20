import { Suspense } from "react";
import LoginForm from "./LoginForm";
 
 

const logInPage = () => {
    
    
    return (
        <Suspense fallback="loading..........">

             <h2 className="font-bold  text-center mx-auto mt-4 text-2xl">Login</h2>
            
      
             <LoginForm></LoginForm>
            
        </Suspense>
    );
};

export default logInPage;