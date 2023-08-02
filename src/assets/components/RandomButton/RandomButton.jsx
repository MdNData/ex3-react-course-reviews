export const RandomButton = ({ position, setPosition, reviews }) => {

  const randomReview = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    while (randomNum == position) {
      randomNum = Math.floor(Math.random() * reviews.length);
    }
    setPosition(randomNum);
  };

  return (
    <button className="btn" onClick={randomReview}>
      Surprise Me
    </button>
  );
};
