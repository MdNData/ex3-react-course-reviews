import { useState } from "react";
import data from "./data";
import { ReviewContainer } from "./assets/components/ReviewContainer/ReviewContainer";

const App = () => {
  const [reviews, setReviews] = useState(data);
  return (
    <main>
      <ReviewContainer reviews={reviews} setReviews={setReviews} />
    </main>
  );
};
export default App;
