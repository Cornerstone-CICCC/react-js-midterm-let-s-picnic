import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import DeliverAndMembership from "./components/DeliverAndMembership";
import DiscountAndPromot from "./components/DiscountAndPromot";
import Nav from "./components/Nav";
import AppDownload from "./components/AppDownload";

function App() {
  return (
    <main className="bg-gray-100">
      <Nav />
      <Banner />
      <Categories />
      <DiscountAndPromot />
      <DeliverAndMembership />
      <ProductsList />
      <AppDownload />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
