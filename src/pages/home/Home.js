import ProductCard from "components/productCard/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "utils/ServerApi";
import "./home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((products) => {
      console.log(products);
      setProducts(products);
    });
  }, []);

  return (
    <div className="home-page">
      <img src="/banner.png" alt="banner" className="banner"></img>
      <h1 className="title">Products</h1>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              className="product"
              pic={product.pic}
              productName={product.title}
              productPrice={product.min_price}
              productDesc={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
