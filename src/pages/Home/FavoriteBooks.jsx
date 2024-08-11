import { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";


const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="px-4 lg:px-24">
      <BookCard books={books} headline="Best Seller Books"></BookCard>
    </div>
  );
};

export default FavoriteBooks;
