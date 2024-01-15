import "./productCard.scss";

const ProductCard = (props) => {
  const { pic, productName, productPrice, productDesc } = props;
  const truncatedText = productDesc.slice(0, 50) + "...";
  return (
    <div className="productCard">
      <img src={pic} alt="img" className="product-pic"></img>
      <p className="pro-name">{productName}</p>
      <p className="pro-price">${productPrice}</p>
      <p className="pro-desc">{truncatedText}</p>
    </div>
  );
};

export default ProductCard;
