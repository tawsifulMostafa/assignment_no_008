import SearchBooks from "./search";


const BooksPage = async () => {
    const booksRes = await fetch("http://localhost:3000/data/bookData.json");
    const books = await booksRes.json();
    return (
        <SearchBooks books={books} />
    );
};
export default BooksPage;






