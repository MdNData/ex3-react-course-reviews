import { useState } from "react";
import data from "./data";
import { BiSolidQuoteRight } from "react-icons/bi";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [position, setPosition] = useState(0);

  const prevReview = () => {
    if (position == 0) {
      setPosition(reviews.length - 1);
    } else {
      setPosition(position - 1);
    }
  };

  const nextReview = () => {
    if (position == reviews.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const randomReview = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    while(randomNum == position){
      randomNum = Math.floor(Math.random() * reviews.length);
    }
    setPosition(randomNum);
  };

  return (
    <main>
      <section>
        <article className="review">
          <div className="img-container">
            <img src={reviews[position].image} alt="" className="person-img" />
            <div className="quote-icon">
              <BiSolidQuoteRight />
            </div>
          </div>
          <h4 className="author">{reviews[position].name}</h4>
          <p className="job">{reviews[position].job}</p>
          <p className="info">{reviews[position].text}</p>
          <div className="btn-container">
            <span className="prev-btn" onClick={prevReview}>
              {"<"}
            </span>
            <span className="next-btn" onClick={nextReview}>
              {">"}
            </span>
          </div>
          <button className="btn" onClick={randomReview}>
            Surprise Me
          </button>
        </article>
      </section>
    </main>
  );
};
export default App;
