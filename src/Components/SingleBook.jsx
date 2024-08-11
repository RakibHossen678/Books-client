import { useLoaderData } from "react-router-dom";
const SingleBook = () => {
  const {
    bookPDFUrl,
    bookTitle,
    bookDescription,
    category,
    imageURL,
    authorName,
  } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={imageURL} className="h-96" alt="" />
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
