import Image from "next/image";
import Layout from "./components/Layout"
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import Services from './components/Services';
import ImageCarousel from './components/Carousel';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Services />
      <Brands />
      <ImageCarousel />
    </Layout>
  );
}
