import Banner from "../../Components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestSellerBooks></BestSellerBooks>
      <FavBook></FavBook>
    </div>
  );
};

export default Home;
