import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import OurSpecs from "@/components/OurSpecs";
import LatestProducts from "@/components/product/LatestProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestProducts />
      <BestSelling />
      <OurSpecs />
      <NewsLetter />
    </div>
  );
}
