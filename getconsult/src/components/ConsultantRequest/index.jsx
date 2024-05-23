import Navbar1 from "../Navbar1";
import FooterSeaWireFooter from "../FooterSeaWireFooter";
import "./index.css";
import consultation_request from '../Assets/consultation_request.jpeg';

const ConsultationRequest = () => {
  return (
    <>
      <Navbar1 />
      <div className="top-container">
        <div className="consultation-form">
          <h2 className="consultation-heading">Consultation Request</h2>
          <div className="form-group">
            <label htmlFor="topic1">Consultation Topic (Please tell us about what you want to consult on)</label>
            <textarea id="topic1" name="topic1" rows="4" className="input-field"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="industry">Industry:</label>
            <div className="input-with-icon">
            <input type="text" id="industry" name="industry" placeholder="Industry" className="input-field" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.9997 9.17C16.8123 8.98375 16.5589 8.87921 16.2947 8.87921C16.0305 8.87921 15.7771 8.98375 15.5897 9.17L11.9997 12.71L8.4597 9.17C8.27234 8.98375 8.01889 8.87921 7.7547 8.87921C7.49052 8.87921 7.23707 8.98375 7.0497 9.17C6.95598 9.26297 6.88158 9.37357 6.83081 9.49543C6.78004 9.61729 6.75391 9.74799 6.75391 9.88C6.75391 10.012 6.78004 10.1427 6.83081 10.2646C6.88158 10.3864 6.95598 10.497 7.0497 10.59L11.2897 14.83C11.3827 14.9237 11.4933 14.9981 11.6151 15.0489C11.737 15.0997 11.8677 15.1258 11.9997 15.1258C12.1317 15.1258 12.2624 15.0997 12.3843 15.0489C12.5061 14.9981 12.6167 14.9237 12.7097 14.83L16.9997 10.59C17.0934 10.497 17.1678 10.3864 17.2186 10.2646C17.2694 10.1427 17.2955 10.012 17.2955 9.88C17.2955 9.74799 17.2694 9.61729 17.2186 9.49543C17.1678 9.37357 17.0934 9.26297 16.9997 9.17Z" fill="black"/>
              </svg>
            </div>
             </div>
          <div className="form-group">
            <label htmlFor="function">Function:</label>
            <div className="input-with-icon">
            <input type="text" id="function" name="function" placeholder="Function" className="input-field" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.9997 9.17C16.8123 8.98375 16.5589 8.87921 16.2947 8.87921C16.0305 8.87921 15.7771 8.98375 15.5897 9.17L11.9997 12.71L8.4597 9.17C8.27234 8.98375 8.01889 8.87921 7.7547 8.87921C7.49052 8.87921 7.23707 8.98375 7.0497 9.17C6.95598 9.26297 6.88158 9.37357 6.83081 9.49543C6.78004 9.61729 6.75391 9.74799 6.75391 9.88C6.75391 10.012 6.78004 10.1427 6.83081 10.2646C6.88158 10.3864 6.95598 10.497 7.0497 10.59L11.2897 14.83C11.3827 14.9237 11.4933 14.9981 11.6151 15.0489C11.737 15.0997 11.8677 15.1258 11.9997 15.1258C12.1317 15.1258 12.2624 15.0997 12.3843 15.0489C12.5061 14.9981 12.6167 14.9237 12.7097 14.83L16.9997 10.59C17.0934 10.497 17.1678 10.3864 17.2186 10.2646C17.2694 10.1427 17.2955 10.012 17.2955 9.88C17.2955 9.74799 17.2694 9.61729 17.2186 9.49543C17.1678 9.37357 17.0934 9.26297 16.9997 9.17Z" fill="black"/>
              </svg>
            </div>
             </div>
          <div className="form-group">
            <label htmlFor="expertise">Expertise Area:</label>
            <div className="input-with-icon">
            <input type="text" id="expertise" name="expertise" placeholder="Expertise Area" className="input-field" />
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.9997 9.17C16.8123 8.98375 16.5589 8.87921 16.2947 8.87921C16.0305 8.87921 15.7771 8.98375 15.5897 9.17L11.9997 12.71L8.4597 9.17C8.27234 8.98375 8.01889 8.87921 7.7547 8.87921C7.49052 8.87921 7.23707 8.98375 7.0497 9.17C6.95598 9.26297 6.88158 9.37357 6.83081 9.49543C6.78004 9.61729 6.75391 9.74799 6.75391 9.88C6.75391 10.012 6.78004 10.1427 6.83081 10.2646C6.88158 10.3864 6.95598 10.497 7.0497 10.59L11.2897 14.83C11.3827 14.9237 11.4933 14.9981 11.6151 15.0489C11.737 15.0997 11.8677 15.1258 11.9997 15.1258C12.1317 15.1258 12.2624 15.0997 12.3843 15.0489C12.5061 14.9981 12.6167 14.9237 12.7097 14.83L16.9997 10.59C17.0934 10.497 17.1678 10.3864 17.2186 10.2646C17.2694 10.1427 17.2955 10.012 17.2955 9.88C17.2955 9.74799 17.2694 9.61729 17.2186 9.49543C17.1678 9.37357 17.0934 9.26297 16.9997 9.17Z" fill="black"/>
              </svg>
            </div>
            </div>
          <div className="form-group">
            <label htmlFor="additional-info">Additional Information:</label>
            <textarea id="additional-info" name="additional-info" rows="4" className="input-field" placeholder="Not strictly required"></textarea>
          </div>
          <div className="request-button">
          <button className="btn-request">Request Consultation</button>
          </div>
        </div>
        <div className="consultation-image">
          <img src={consultation_request} className="image1" alt="consultation" />
        </div>
      </div>
      <FooterSeaWireFooter />
    </>
  );
};

export default ConsultationRequest;
