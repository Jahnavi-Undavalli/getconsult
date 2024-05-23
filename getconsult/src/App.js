
import './App.css';
import {Routes,Route} from 'react-router-dom'
import ConsultationRequest from './components/ConsultantRequest';
import ThankYou from './components/ThankYou';
import Footer from './components/FooterSeaWireFooter';
import BuyPremiumMonthly from './components/BuyPremiumMonthly';
import BuyPremiumYearly from './components/BuyPremiumYearly';
import AnimationThankYou from './components/AnimationThankyou';
import GetConsultation from './components/GetConsultation';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ThankYou/>}/>
        <Route exact path="/consulation/request" element={<ConsultationRequest/>}/>
        <Route exact path="/buypremium/monthly" element={<BuyPremiumMonthly/>}/>
        <Route exact path="/buypremium/yearly" element={<BuyPremiumYearly/>}/>
        <Route export path="/getconsult" element={<GetConsultation/>}/>
        <Route exact path="/animation" element={<AnimationThankYou/>}/>
        <Route exact path="/Footer" element={<Footer/>}/>
      </Routes>
      </>
  );
}

export default App;
