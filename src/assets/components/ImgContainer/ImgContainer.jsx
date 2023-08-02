import { BiSolidQuoteRight } from "react-icons/bi";
export const ImgContainer = ({img}) => {
  return (
    <div className="img-container">
      <img src={img} alt="" className="person-img" />
      <div className="quote-icon">
        <BiSolidQuoteRight />
      </div>
    </div>
  );
};
