import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";

function Products() {
  console.log("Products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/85080593-5bf0-4e94-b86a-8d1697e67cbe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <div><Effect /></div>
      {products.map((item, index) => (
        <ProductCard key={index} title={item.title} price={item.price} />
      ))}
    </div>
  );
}

export function MyComponent() {
  return <div>MyComponent</div>;
}

export let b = 20;
export let a = 10;

export default Products;

// const product = [
//       {
//         id: 1,
//         title: "Apple iPhone 14",
//         price: "Rs. 1,00,000"
//       },
//       {
//         id: 2,
//         title: "Apple iPhone 13",
//         price: "Rs. 70,000"
//       },
//       {
//         id: 3,
//         title: "Google Pixel 7",
//         price: "Rs. 50,000"
//       },
//       {
//         id: 4,
//         title: "Nokia 1100",
//         price: "Rs. 2,000"
//       },
//       {
//         id: 5,
//         title: "Samsung Galaxy S10",
//         price: "Rs. 1,00,000"
//       },
//       {
//         id: 6,
//         title: "Sony Xperia S10",
//         price: "Rs. 1,00,000"
//       }
//     ];
// let products = [];
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports

// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ] 
// newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]

// oldDom = [
//   <ProductCard key="1" title="Title 1" />,
//   <ProductCard key="2" title="Title 2" />,
//   <ProductCard key="3" title="Title 3" />
// ]
// newDom = [
//   <ProductCard key="1" title="Title 1" />,
//   <ProductCard key="4" title="Title 4" />,
//   <ProductCard key="2" title="Title 2" />,
//   <ProductCard key="3" title="Title 3" />
// ]