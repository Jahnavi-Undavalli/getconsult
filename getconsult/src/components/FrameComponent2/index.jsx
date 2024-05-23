
import "./index.css";
import plato_image from '../Assets/plato image.jpeg';
const FrameComponent2 = () => {
    const frameComponent3Data = [
        {
          name: 'John Doe',
          category1: 'Human Resource',
          category2: 'Operations',
          rating: 5,
          reviews: '5,291 reviews',
          consultations: '204 Consultations',
          description: 'Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
        },
        {
            name: 'John Doe',
            category1: 'Human Resource',
            category2: 'Operations',
            rating: 5,
            reviews: '5,291 reviews',
            consultations: '204 Consultations',
            description: 'Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
          },
          {
            name: 'John Doe',
            category1: 'Human Resource',
            category2: 'Operations',
            rating: 5,
            reviews: '5,291 reviews',
            consultations: '204 Consultations',
            description: 'Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
          },
      ];
  return (
    <div className="frame-parent3">
      <div className="top-consultants-wrapper">
        <h1 className="top-consultants">Top Consultants</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M9 14H39M14 24H34M20 34H28" stroke="#7C7D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div className="frame-parent4">
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="frame-parent7">
              <button className="number-of-consultation-wrapper">
                <div className="number-of-consultation">Top Reviews</div>
              </button>
              <button className="number-of-consultation-wrapper">
                <div className="number-of-consultation">Middle Management</div>
              </button>
              <button className="number-of-consultation-wrapper">
                <div className="number-of-consultation">
                  Number of Consultation
                </div>
              </button>
              <button className="number-of-consultation-wrapper">
                <div className="number-of-consultation">
                 CXO
                </div>
              </button>
              <button className="senior-management-wrapper">
                <div className="senior-management">Senior Management</div>
              </button>
            </div>
           
          </div>
        </div>
        {frameComponent3Data.map((data, index) => (
            <div key={index} className="frame-container">
              <div className="frame-div">
                <div className="frame-wrapper">
                  <div className="ellipse-parent">
                    <div className="frame-inner" />
                    <div className="wrapper-ellipse-22">
                        <img src={plato_image} className="image"/>
                    </div>
                  </div>
                </div>
                <div className="middle-management-parent">
                  <div className="middle-management">{data.category1}</div>
                  <div className="consultations">{data.consultations}</div>
                </div>
              </div>
              <div className="john-doe-parent">
                <h2 className="john-doe">{data.name}</h2>
                <div className="lorem-lorem-ipsum">{data.description}</div>
                <div className="frame-parent1">
                    <div className="category-data">
          <button className="human-resource-wrapper">
            <div className="human-resource">Human Resource</div>
          </button>
          <button className="operations-wrapper">
            <div className="operations">Operations</div>
          </button>
          </div>
        </div>
                <div className="frame-parent2">
                  <div className="star-rating-wrapper">
                  <div className="star-rating2">
                      <div className="stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100"/>
</svg>
              </div>
                        <div className="reviews2">{data.reviews}</div>
                      </div>
                  </div>
                  <div className="get-consulation-button-visit">
                  <button className="visit-profile-wrapper">
                    <div className="visit-profile">Visit Profile</div>
                  </button>
                  <button className="consult-now-wrapper">
                    <div className="consult-now">Consult now</div>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="frame-wrapper1">
        <button className="show-more-wrapper">
          <div className="show-more">Show more</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;

