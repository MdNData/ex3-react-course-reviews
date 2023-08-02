export const PrevNext = ({ position, setPosition, reviews }) => {
  
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

  return (
    <div className="btn-container">
      <span className="prev-btn" onClick={prevReview}>
        {"<"}
      </span>
      <span className="next-btn" onClick={nextReview}>
        {">"}
      </span>
    </div>
  );
};
