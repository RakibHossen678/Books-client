import { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";


const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0,4)));
  }, []);
  return (
    <div className="px-4 lg:px-24">
      <BookCard books={books} headline="Best Seller Books"></BookCard>
    </div>
  );
};

export default BestSellerBooks;
