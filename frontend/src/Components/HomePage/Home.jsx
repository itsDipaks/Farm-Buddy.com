
import ShopByCategories from "./Category/ShopByCategories"

import Footer from "./Footer/footer"
import Offers from "./Offers/Offers";
import Brands from "./Brands/Brands";
import DayDeals from './components/DayDeals/DayDeals';
import OffersBanner from "./OffersBanner/OffersBanner";
import HealthConcern from "./HealthConcern/HealthConcern";
import PaymentOffers from "./PaymentOffers/PaymentOffers";


function Home() {
  return (
    <div >
    <Brands/>
    <OffersBanner/>
    <HealthConcern/>
    <PaymentOffers/>
    <DayDeals/>
    <ShopByCategories/>
     <Offers/>
     <Footer/>
     
    </div>
  );
}

export default Home;
