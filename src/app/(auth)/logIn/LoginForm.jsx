"use client"


import { authClient, signIn } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const handleGoogleLogin = async () => {
        await signIn.social({
            provider: "google",
        });

    }

    useEffect(() => {
        if (searchParams.get("reason") === "bookId-login-req" || searchParams.get('reason') === "profile-login-req")   {
            toast.error("Please login first");
        }
    }, [searchParams]);
    const onSubmit = async (e) => {
        e.preventDefault();
        const loginFormdata = new FormData(e.currentTarget);
        const userData = Object.fromEntries(loginFormdata.entries())

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/'
        });
        if (error) {
            toast.error("Login failed! Please check your credentials.");
        } else {
            toast.success("Login successful! Welcome back");
        }

    };

    return (
        <div>

            <div>
                <Form className="flex flex-col lg:md:w-96 gap-4 lg:md:mx-auto border border-b-cyan-700 lg:md:p-8 p-4 m-4 lg:md:8 item-center rounded-3xl " onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter Your Email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Login
                        </Button>
                        <Link href={'/signUp'}><Button>Register  ?</Button></Link>

                    </div>

                    <Button className="btn text-green-400 border border-green-300 p-3 my-4" onClick={handleGoogleLogin}>Login With Google</Button>
                </Form>

            </div>
        </div>
    );
};

export default LoginForm;