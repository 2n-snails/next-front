import React from "react";

interface IProps{
    data: object;
}
const Product: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      asd
    </div>
  );
};

export default Product;
