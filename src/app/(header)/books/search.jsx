"use client"

import { Button, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

export default function SearchBooks({ books }) {
    const [category, setCategory] = useState('All');
    const [title, setTitle] = useState('');

    const filteredBooks = books.filter((book) => {
        const titleFilter = book.title.toLowerCase().includes(title.toLowerCase());
        const matchingCategory = category === 'All' || book.category === category;
        return titleFilter && matchingCategory;
    });
   

    return (
        <Suspense fallback={
            <div className="flex flex-col justify-center items-center min-h-screen gap-3">
                <span className="loading loading-spinner loading-lg text-success"></span>
                <p className="text-success font-medium">Loading.......</p>
            </div>

        }>

            <div>
                <div className="flex justify-between">


                    <SearchField name="search">
                        <Label>Search</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input onChange={(e) => setTitle(e.target.value)} className="w-70" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>

                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box m-2">

                        <li>
                            <button
                                onClick={() => setCategory('All')}
                                className={category === 'All' ? 'bg-green-300 text-white font-bold' : 'hover:bg-gray-100'}
                            >
                                All
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setCategory('Story')}
                                className={category === 'Story' ? 'bg-green-300 text-white font-bold' : 'hover:bg-gray-100'}
                            >
                                Story
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setCategory('Tech')}
                                className={category === 'Tech' ? 'bg-green-300 text-white font-bold' : 'hover:bg-gray-100'}
                            >
                                Tech
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setCategory('Science')}
                                className={category === 'Science' ? 'bg-green-300 text-white font-bold' : 'hover:bg-gray-100'}
                            >
                                Science
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {filteredBooks.map((book) => (
                        <div
                            key={book.id}
                            className="flex flex-col items-center gap-3 p-3 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full aspect-3/4">
                                <Image
                                    src={book.image_url}
                                    alt={book.title}
                                    width={300}
                                    height={300}
                                    loading="eager"

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
            </div>
        </Suspense>
    );
};


