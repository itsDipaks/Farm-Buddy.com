import ShopByCategories from "./Category/ShopByCategories"

// import HomeDesc from "./HomeDesc/HomeDesc"
import Offers from "./Offers/Offers";
import Brands from "./Brands/Brands";
import OffersBanner from "./OffersBanner/OffersBanner";
import PaymentOffers from "./PaymentOffers/PaymentOffers";
import HealthConcern from './HealthConcern/HealthConcern';
import DayDeals from './DayDeals/DayDeals';
import Footer from "./Footer/Footer";
import Navbar from "../../Pages/Navbar/Navbar";
import Reviews from "./Reviews/Reviews";


function Home() {
  return (
    <div >
     <Navbar/>
     <Offers/>
    <Brands/>
    <OffersBanner/>
    <HealthConcern/>
    <PaymentOffers/>
    <DayDeals/>
    <ShopByCategories/>
    <Reviews/>
    {/* <HomeDesc/> */}
     <Footer/>
     
    </div>
  );
}

export default Home;
