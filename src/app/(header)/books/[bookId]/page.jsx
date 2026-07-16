import { getSession } from "@/app/lib/session";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";


const BookDetailsPage = async ({ params }) => {
    const sessionCheck = await getSession()

    if (!sessionCheck) {

        redirect("/logIn?reason=bookId-login-req");


    }
    const { bookId } = await params;

    const booksRes = await fetch(
        "http://localhost:3000/data/bookData.json",
        {
            cache: "no-store",
        }
    );

    const books = await booksRes.json();

    const book = books.find(
        (b) => b.id === Number(bookId)
    );

    if (!book) {
        return <div>Book not found.</div>;
    }

    return (
        <Suspense fallback={
            <div className="flex flex-col justify-center items-center min-h-screen gap-3">
                <span className="loading loading-spinner loading-lg text-success"></span>
                <p className="text-success font-medium">Loading...</p>
            </div>
        }>
            <div className="  mx-auto card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={book.image_url}
                        alt="Book Image"
                        width={300}
                        height={300}
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{book.title}</h2>
                    <p>{book.description}</p>
                    <p>category:{book.category}</p>

                    <div className="card-actions justify-end">
                        <Button><Link href='/books'>Back</Link></Button>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default BookDetailsPage;