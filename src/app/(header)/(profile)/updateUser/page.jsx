"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";



import { toast } from "sonner";

const UpdateUserPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const submitData = Object.fromEntries(formData.entries());

        const res = await authClient.updateUser({
            name: submitData.name,
            image: submitData.image,

        });
        console.log(res);
        if (res.error) {
            toast.error(error.message || "Failed to update profile");
            return;
        } else {

            toast.success("Profile updated successfully!");
            router.push("/profile")
        }
    };

    return (
        <div className="p-5 m-5">
            <Button onClick={handleGoogleLogin}>Login With Google</Button>
            <form
                onSubmit={onSubmit}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-20 justify-center mx-auto"
            >
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your new name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your image URL" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2 mt-4">
                    <Button type="submit">
                        <Check className="w-4 h-4" />
                        Submit
                    </Button>

                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUserPage;