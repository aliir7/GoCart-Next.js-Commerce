// "use client";

// import ProductDescription from "@/components/product/ProductDescription";
// import ProductDetails from "@/components/product/ProductDetails";
// import useProductStore from "@/lib/stores/productStore";
// import type { Product } from "@/types";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Product() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState<Product>();
//   const { products, getProduct } = useProductStore();

//   const fetchProduct = async () => {
//     const product = products.find((product) => product.id === productId);
//     setProduct(product);
//   };

//   useEffect(() => {
//     if (products.length > 0) {
//       fetchProduct();
//     }
//     scrollTo(0, 0);
//   }, [productId, products]);

//   return (
//     <div className="mx-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Breadcrums */}
//         <div className="  text-gray-600 text-sm mt-8 mb-5">
//           Home / Products / {product?.category}
//         </div>

//         {/* Product Details */}
//         {product && <ProductDetails product={product} />}

//         {/* Description & Reviews */}
//         {product && <ProductDescription product={product} />}
//       </div>
//     </div>
//   );
// }
function page() {
  return <div>page</div>;
}

export default page;
