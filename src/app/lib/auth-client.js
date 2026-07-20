import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://assignment-no-0008.vercel.app",
        //    baseURL:"http://localhost:3000"
    
});
export const { signIn, signUp, useSession , signOut } = createAuthClient();