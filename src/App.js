

import { Routes, Route } from 'react-router-dom';
import Header from './pages/components/Header/Header';
import Home from './pages/Home';

import About from './pages/About';
import Cart from './pages/Cart'; // أو المسار الصحيح للملف
import Products from './pages/Products';

import ProductDetails from './pages/ProductDetails';

import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';
import VisaPayment from "./pages/VisaPayment";
import InstapayPayment from './pages/InstapayPayment';
import VodafoneCashPayment from './pages/VodafoneCashPayment';

import Services from './pages/Services';
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyCode from './pages/VerifyCode';
import ResetPassword from './pages/ResetPassword';
import SignUp from "./pages/SignUp";
// import Products from './pages/Products';
import DeliverySelectionPage from './pages/DeliverySelectionPage';
import DriverSuggestion from './pages/DriverSuggestion';
// import TransportOffers from './pages/transport_offers';
import ShippingDetails from './pages/transporter_requist';
import TransportOffers from './pages/transport_offers';
import DriverOffers from './pages/DriverOffers';
import 'leaflet/dist/leaflet.css';
import QualityCheck from './pages/QualityCheck';
// import Notifications from './pages/Notifications';
//  import ProductDetails from './pages/ProductDetails';


import Farmer from './pages/farmer';
// import TransporterHome from './pages/transporter';

import DriverOrders from './pages/transporter_orders';
import DriverProfile from './pages/driver_profile';
import TransporterHome from './pages/transporter';
import WalletPage from './pages/Transporter_Wallet'; 
import InspectorWalletPage from './pages/quality_Wallet'; 

import DriverServices from './pages/DriverServices'; 


//  import ResetPassword from './pages/ResetPassword';
import QualityHome from './pages/QualityHome';
import QualityOffers from './pages/QualityInspection';
import QualityInspectionDetails from './pages/QualityInspectionDetails';
import QualityReports from "./pages/quality_reports";
import Footer from './pages/components/Footer/Footer';
import FarmerHome from './pages/FarmerHome';
import Notifications from './pages/Notifications';

import FarmerWalletPage from './pages/farmer_wallet';






function App() {
  return (
    <>
      <Header />
   
      <Routes>
         
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/visapayment" element={<VisaPayment />} />
        <Route path="/instapaypayment" element={<InstapayPayment />} />
        <Route path="/vodafonecashpayment" element={<VodafoneCashPayment />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/VerifyCode" element={<VerifyCode />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/delivery-selection" element={<DeliverySelectionPage />} /> 
        <Route path="/driver-suggestion" element={<DriverSuggestion />} />

 
     
        <Route path="/transport_offers" element={<TransportOffers />} />
        <Route path="/DriverOffers" element={<DriverOffers />} />
        <Route path="/farmer" element={<Farmer />} />

        <Route path="/QualityCheck" element={<QualityCheck />} /> 
        {/* <Route path="/Notifications" element={<Notifications />} /> */}
           {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
           <Route path="/product/:id" element={<ProductDetails />} />
          
            <Route path="/transporter" element={<TransporterHome />} />
       
       <Route path="/transporter_requist" element={<ShippingDetails />} />
        <Route path="/driver_orders" element={<DriverOrders />} />
         <Route path="/driver_profile" element={<DriverProfile />} />
         <Route path="/DriverServices" element={<DriverServices />} />
           


         <Route path="/QualityHome" element={<QualityHome />} />
          <Route path="/QualityInspection" element={<QualityOffers />} />
          <Route path="/QualityInspectionDetails" element={<QualityInspectionDetails />} />
 <Route path="/quality_reports" element={<QualityReports />} />
          <Route path="/Transporter_Wallet" element={<WalletPage />} />
          <Route path="/quality_Wallet" element={<InspectorWalletPage />} />
<Route path="/FarmerHome" element={<FarmerHome />} />
  <Route path="/farmer/orders" element={<Farmer />} /> 
  <Route path="/farmer_wallet"   element={<FarmerWalletPage />} />  
  <Route path="/farmer_wallet"   element={<FarmerWalletPage />} />  

    <Route path="/Notifications" element={<Notifications />} />


      </Routes>
         <Footer />
    </>
  );
}

export default App;

