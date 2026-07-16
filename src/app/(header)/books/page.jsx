
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

const BooksPage = async () => {
    const booksRes = await fetch("http://localhost:3000/data/bookData.json");
    const books = await booksRes.json();
    return (
        <Suspense fallback={
            <div className="flex flex-col justify-center items-center min-h-screen gap-3">
                <span className="loading loading-spinner loading-lg text-success"></span>
                <p className="text-success font-medium">Loading...</p>
            </div>
        }>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="flex flex-col items-center gap-3 p-3 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative w-full aspect-[3/4]">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <h2 className="text-sm sm:text-base font-semibold text-center line-clamp-2">
                            {book.title}
                        </h2>

                        <Link href={`/books/${book.id}`} className="w-full">
                            <Button size="sm" className="w-full">Details</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Suspense>
    );
};

export default BooksPage;


