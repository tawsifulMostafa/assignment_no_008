import { getSession } from "@/app/lib/session";
import { db } from "@/app/lib/auth";

import Image from "next/image";

import { redirect } from "next/navigation";

import BorrowThisBook from "./BorrowThisBook";


export const dynamic = "force-dynamic";

const BookDetailsPage = async ({ params }) => {
    const sessionCheck = await getSession();

    if (!sessionCheck) {
        redirect("/logIn?reason=bookId-login-req");
    }

    const { bookId } = await params;

    const book = await db.collection("data").findOne({
        id: Number(bookId),
    });

    if (!book) {
        return <div>Book not found.</div>;
    }


    return (
        <div className="lg:md:flex grid gap-3 mx-auto justify-center ">
            <div className="lg:md:p-8  p-3 m-3 border border-gray-500 bg-base-100 w-64 shadow-sm justify-center">

                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={500}
                    height={500}
                />

            </div>

            <div className="pt-8 p-5 card border border-gray-400 m-4  ">
                <h2 className="font-semibold text-3xl">  {book.title} </h2>
                <p >By<span className="font-bold text-2xl pl-2">{book.author}</span></p>
                <p>{book.description}</p>
                <p className="font-bold">Category:<span className="text-green-400 pl-2
                ">{book.category}</span></p>
                <p className="text-gray-700 ">Available Quantity:<span className="text-2xl font-bold text-black p-3">{book.available_quantity}</span>piece left..</p>
                <div className="justify-center p-4">
                    <BorrowThisBook></BorrowThisBook>
                </div>

            </div>
        </div>
    );
};

export default BookDetailsPage;