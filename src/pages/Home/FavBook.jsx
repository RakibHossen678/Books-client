import favImg from "../../assets/favoritebook.jpg";
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20">
      <div className="md:w-1/2">
        <img className="rounded md:w-10/12" src={favImg} alt="" />
      </div>
      <div className="md:w-1/2 spacey-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10  md:w-5/6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error
          accusamus quos, quia cupiditate consequatur tenetur quidem optio
          repellat quam eligendi, impedit mollitia non aliquam praesentium
          inventore architecto at. Recusandae.
        </p>
      </div>
    </div>
  );
};

export default FavBook;
