"use client"
import { authClient, signIn } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpPage = () => {
    const router = useRouter();
    const handleGoogleLogin = async () => {
        await signIn.social({
            provider: "google",
        });

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUserData = Object.fromEntries(formData.entries());
        console.log(newUserData)

        const { data, error } = await authClient.signUp.email({
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password,
            image: newUserData.image,
            callbackURL: "/logIn"


        });
        if (!error) {
            toast.success("Account created successfully!");
            router.push("/");
        }
    };

    return (
        
        <div>
            <div className="text-center text-green-500 font-bold text-[36px] p-4">
                Register
            </div>
            <Form className="flex flex-col lg:md:w-96 gap-4 mx-auto border border-black lg:md:p-8 p-2 m-4 lg:md:8 item-center rounded-3xl " onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Enter a valid name";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>
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
                    <Input name="email" placeholder="Enter Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be 8 characters or longer";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input name="password" placeholder="Enter your password" />
                    <FieldError />
                </TextField>

                <TextField>
                    <Label>Image</Label>
                    <Input name="image" placeholder="paste your photo URL"></Input>
                    <FieldError />
                </TextField>

                <div className="flex gap-2 mx-auto ">
                    <Button className="rounded-xl" type="submit">
                        <Check />
                        Register
                    </Button>
                </div>
                <p className="text-gray-500">Already have an Account ? <Link className=" text-black ml-4 border border-[#11120e] p-1 px-4 rounded bg-green-400" href="/logIn">Login</Link></p>
                <Button className="btn text-green-400 border border-green-300 p-3 my-4" onClick={handleGoogleLogin}>Login With Google</Button>

            </Form>
        </div>
    );
};

export default SignUpPage;




