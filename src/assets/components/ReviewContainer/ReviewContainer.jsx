import { useState } from "react";
import { ImgContainer } from "../ImgContainer/ImgContainer";
import { Description } from "../Description/Description";
import { PrevNext } from "../PrevNext/PrevNext";
import { RandomButton } from "../RandomButton/RandomButton";

export const ReviewContainer = ({ reviews, setReviews }) => {
  const [position, setPosition] = useState(0);

  return (
    <section>
      <article className="review">
        <ImgContainer img={reviews[position].image} />
        <Description
          name={reviews[position].name}
          job={reviews[position].job}
          text={reviews[position].text}
        />
        <PrevNext position={position} setPosition={setPosition} reviews={reviews} />
        <RandomButton position={position} setPosition={setPosition} reviews={reviews} />
      </article>
    </section>
  );
};
