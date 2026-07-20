
import { redirect } from "next/navigation";
import Image from "next/image";
import { getSession } from "@/app/lib/session";
import Link from "next/link";



const ProfilePage = async () => {

    const session = await getSession()

    if (!session) {
        redirect("/logIn?reason=profile-login-req");
    };

    const user = session.user;


    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <Image
                src={user.image}
                width={120}
                height={120}
                className="rounded-full mx-auto"
                alt={user.name}
            />

            <h2 className="text-2xl font-bold text-center mt-4">
                {user.name}
            </h2>

            <p className="text-center text-gray-500">
                {user.email}
            </p>

            <div className="mt-8 space-y-4">
                <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{user.name}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <Link className="btn my-4 items-center justify-center " href={"/"}>Back to Home</Link>
                <Link className="btn " href={'/updateUser'}>Change Information</Link>

            </div>

        </div>
    );
};

export default ProfilePage;