
import './Home.css';
import DayDeals from './components/DayDeals/DayDeals';
import Footer from './components/Footer/footer';
import Brands from './components/Brands/Brands';
import Carousel from './components/FrontOffer/FrontOffer';
import LabTests from './components/LabTests/LabTests';
import Offers from './components/Offers/Offers';
import Reviews from './components/Reviews/Reviews';
import HealthConcern from './components/HealthConcern/HealthConcern';
import HealthArticles from './components/HealthArticles/HealthArticles';
import ShopByCategories from './components/Category/ShopByCategories';
import PaymentOffers from './components/PaymentOffers/PaymentOffers';
import HomeDesc from './components/HomeDesc/HomeDesc';






function Home() {
  return (
    <div className="Home">
     <Offers/>
    <Carousel/>
    <HealthConcern/>
    <PaymentOffers/>
    <ShopByCategories/>
    <LabTests/>  
    <Brands/>
     <DayDeals/>
     <HealthArticles/>
     <Reviews/>
     <HomeDesc/>
     <Footer/>
     
      
     
      
    
    </div>
  );
}

export default Home;
