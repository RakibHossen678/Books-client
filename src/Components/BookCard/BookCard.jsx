import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./BookCard.css";
import { FaCartShopping } from "react-icons/fa6";
const BookCard = ({ books, headline }) => {
  return (
    <div className="my-16 lg:24 px-4 mt-12">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      <div className="">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-full w-full mt-12"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img className="w-full h-full object-cover bg-cover " src={book.imageURL} alt="" />
                  <div className="bg-blue-600 top-3 right-3  absolute hover:bg-black p-2 rounded-lg">
                    <FaCartShopping className="w-4 h-4  text-white"></FaCartShopping>
                  </div>
                  <div>
                    <div>
                      <h3>{book.bookTitle}</h3>
                      <p>{book.authorName}</p>
                    </div>
                    <div>
                      <p>$10.00</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
