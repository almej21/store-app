import axios from "axios";

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://fedtest.bylith.com/api/catalog/getAll`)
      .then((res) => {
        const productsArray = res.data.data.map((item) => ({
          title: item.title,
          min_price: item.min_price,
          description: item.description,
          pic: `https://fedtest.bylith.com/api/imager.php?url=${item.images[0].url}&type=fit&width=300&height=300&quality=70`,
        }));

        resolve(productsArray);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        reject(err);
      });
  });
};

export const fetchSingleProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://fedtest.bylith.com/api/catalog/get?id=${id}`)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        reject(err);
      });
  });
};

export const imager = (url) => {
  return `https://fedtest.bylith.com/api/imager.php?url=${url}&type=fit&width=1000&height=1000&quality=70`;
};
