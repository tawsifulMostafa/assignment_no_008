import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";

const FeaturedBooks = async () => {
    const BooksRes = await fetch("http://localhost:3000/data/bookData.json");
    const totalBooks = await BooksRes.json();
    const books = totalBooks.slice(0, 4);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold">Featured Books</h2>

                <Link
                    href="/books"
                    className="btn border border-green-200 text-green-600"
                >
                    Show All Books
                    <ArrowRight />
                </Link>
            </div>

      
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm"
                    >
                        <Image
                            src={book.image_url}
                            alt={book.title}
                            width={250}
                            height={350}
                            className="w-full h-72 object-contain"
                        />

                        <div className="mt-4 space-y-2 grow">
                            <h3 className="text-xl font-semibold">{book.title}</h3>
                            <p className="text-gray-500">{book.category}</p>
                        </div>

                        <Link
                            href={`/books/${book.id}`}
                            className="btn mt-5 border border-blue-200 text-blue-500"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBooks;