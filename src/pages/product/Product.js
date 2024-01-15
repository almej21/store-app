import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import { fetchSingleProduct, imager } from "utils/ServerApi";
import "./product.scss";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  // const [selectedVar, setSelectedVar] = useState(product.variants[0].title);
  const [selectedVar, setSelectedVar] = useState("please select a variant");

  useEffect(() => {
    fetchSingleProduct(id).then((product) => {
      console.log(product);
      setProduct(product);
    });
  }, []);

  return (
    <div className="product-page">
      {product ? (
        <div className="product">
          <div className="product-pics">
            <img src={imager(product.images[0].url)}></img>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="price">${product.min_price}</p>
            <p>{product.description}</p>
            <Dropdown
              onSelect={function (evt) {
                console.log(evt);
                setSelectedVar(evt);
              }}
            >
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                {selectedVar}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "30px" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product.variants.map((variant, index) => {
                  return (
                    <Dropdown.Item key={index} eventKey={variant.title}>
                      {variant.title}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div>no product</div>
      )}
    </div>
  );
};

export default Product;
