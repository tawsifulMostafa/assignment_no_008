import SearchBooks from "./search";
import { db } from "@/app/lib/auth";

const BooksPage = async () => {
    const books = (await db.collection("data").find().toArray()).map((book) => ({
        ...book,
        _id: book._id.toString(),
    }));

    return <SearchBooks books={books} />;
};

export default BooksPage;