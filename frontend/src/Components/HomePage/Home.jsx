import ShopByCategories from "./Category/ShopByCategories"

import Footer from "./Footer/Footer"
import Offers from "./Offers/Offers";
import Brands from "./Brands/Brands";
import OffersBanner from "./OffersBanner/OffersBanner";
import PaymentOffers from "./PaymentOffers/PaymentOffers";
import HealthConcern from './HealthConcern/HealthConcern';
import DayDeals from './DayDeals/DayDeals';


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
