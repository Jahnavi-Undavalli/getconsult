import './index.css';
import image1 from '../Assets/get-consult.jpeg';
import plato_image from '../Assets/plato image.jpeg';
//import image2 from '../Assets/image2.png';
import Navbar1 from "../Navbar1";
import FooterSeaWireFooter from "../FooterSeaWireFooter";
import FrameComponent2 from "../FrameComponent2";

const GetConsultation = () => {
    const boxDetails = [
        {
            name: 'John Doe',
            category1: 'Human Resource',
            category2: 'Operations',
            rating: 5,
            reviews: '5,291 reviews'
        },
        {
            name: 'John Doe',
            category1: 'Human Resource',
            category2: 'Operations',
            rating: 5,
            reviews: '5,291 reviews'
        },
        {
            name: 'John Doe',
            category1: 'Human Resource',
            category2: 'Operations',
            rating: 5,
            reviews: '5,291 reviews'
        },
    ];

    return (
        <>
            <Navbar1 />

            <div className="homepage">
                <div className="welcome-container">
                    <div className='main-heading-container'>
                        <h1 className="welcome">Consultant at <span className='company-name1'>Platokart</span></h1>
                        <p className='welcome-para'>Your on-Line, On Demand, Real-Time Consultation and Advisory Platform</p>
                        <button className='get-button'>Get Started</button>
                    </div>
                    <div className='all-images-container'>
                        <div className='first-container'>
                    <div className='img-para-container-1'>
                        <p className='img-para-1'>At work or in business, are<br /> you in a fix?</p>
                     
                    </div>
                    <div className='star-image'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path d="M30 7.5L33.5755 20.7795C34.0117 22.4 34.23 23.2102 34.6605 23.8726C35.0415 24.4587 35.5413 24.9584 36.1275 25.3395C36.7898 25.77 37.6 25.9883 39.2205 26.4245L52.5 30L39.2205 33.5755C37.6 34.0117 36.7898 34.23 36.1275 34.6605C35.5413 35.0415 35.0415 35.5413 34.6605 36.1275C34.23 36.7898 34.0117 37.6 33.5755 39.2205L30 52.5L26.4245 39.2205C25.9883 37.6 25.77 36.7898 25.3395 36.1275C24.9584 35.5413 24.4587 35.0415 23.8726 34.6605C23.2102 34.23 22.4 34.0117 20.7795 33.5755L7.5 30L20.7795 26.4245C22.4 25.9883 23.2102 25.77 23.8726 25.3395C24.4587 24.9584 24.9584 24.4587 25.3395 23.8726C25.77 23.2102 25.9883 22.4 26.4245 20.7795L30 7.5Z" stroke="#FF8A08" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>   
</div>
                    <div className='image-container'>
                    
                        <img src={image1} alt="" className='consulatant-request-image' />
                    </div>
                    <div className='last-image'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.875 0C22.9105 0 23.75 0.839475 23.75 1.875V7.875C23.75 8.91053 22.9105 9.75 21.875 9.75C20.8395 9.75 20 8.91053 20 7.875V1.875C20 0.839475 20.8395 0 21.875 0ZM37.343 6.40705C38.0753 7.13928 38.0753 8.32645 37.343 9.0587L33.1003 13.3013C32.368 14.0336 31.181 14.0336 30.4487 13.3013C29.7165 12.5691 29.7165 11.3819 30.4487 10.6497L34.6912 6.40705C35.4235 5.6748 36.6108 5.6748 37.343 6.40705ZM6.4065 6.40748C7.13875 5.67525 8.32592 5.67525 9.05815 6.40748L13.3008 10.6501C14.033 11.3823 14.033 12.5696 13.3008 13.3018C12.5686 14.034 11.3814 14.034 10.6491 13.3018L6.4065 9.05912C5.67428 8.3269 5.67428 7.13973 6.4065 6.40748ZM0 21.875C0 20.8395 0.839475 20 1.875 20H7.875C8.91053 20 9.75 20.8395 9.75 21.875C9.75 22.9105 8.91053 23.75 7.875 23.75H1.875C0.839475 23.75 0 22.9105 0 21.875ZM34 21.875C34 20.8395 34.8395 20 35.875 20H41.875C42.9105 20 43.75 20.8395 43.75 21.875C43.75 22.9105 42.9105 23.75 41.875 23.75H35.875C34.8395 23.75 34 22.9105 34 21.875ZM13.3013 30.4487C14.0336 31.181 14.0336 32.368 13.3013 33.1003L9.0587 37.343C8.32645 38.0753 7.13928 38.0753 6.40705 37.343C5.6748 36.6108 5.6748 35.4235 6.40705 34.6912L10.6497 30.4487C11.3819 29.7165 12.5691 29.7165 13.3013 30.4487ZM30.4482 30.449C31.1803 29.717 32.3675 29.717 33.0998 30.449L37.3425 34.6917C38.0747 35.424 38.0747 36.6113 37.3425 37.3435C36.6103 38.0758 35.423 38.0758 34.6908 37.3435L30.4482 33.1007C29.716 32.3685 29.716 31.1812 30.4482 30.449ZM21.875 34C22.9105 34 23.75 34.8395 23.75 35.875V41.875C23.75 42.9105 22.9105 43.75 21.875 43.75C20.8395 43.75 20 42.9105 20 41.875V35.875C20 34.8395 20.8395 34 21.875 34Z" fill="#FF8A08"/>
</svg>
                    <div className='img-para-container-2'>
                        <p className='img-para-2'>Know to ask the right questions, right time!</p>
                    </div>
                    </div>
                    </div>
                </div>

                <section className="get-consultation-inner">
                    <FrameComponent2 />
                </section>

                <section className="get-consultation-child">
                    <div className="suggested-for-you-parent">
                        <h1 className="suggested-for-you">Suggested for you</h1>
                        <div className="frame-parent11">
                            {boxDetails.map((box, index) => (
                                <div key={index} className="frame-parent12">
                                    <div className="frame-wrapper5">
                                        <button className="frame-wrapper6">
                                            <div className="ellipse-container">
                                                <div className="frame-child1" />
                                                <img
                                                    className="image"
                                                    alt=""
                                                    src={plato_image}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    <h3 className="john-doe2">{box.name}</h3>
                                    <div className="frame-parent13">
                                        <div className="frame-wrapper7">
                                            <div className="frame-parent14">
                                                <button className="human-resource-frame">
                                                    <div className="human-resource2">{box.category1}</div>
                                                </button>
                                                <button className="operations-frame">
                                                    <div className="operations2">{box.category2}</div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="frame-parent15">
                                            <div className="frame-wrapper8">
                                                <div className="star-rating-frame">
                                                    <div className="star-rating2">
                                                        <div className="stars">
                                                            {[...Array(box.rating)].map((_, i) => (
                                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                                                    <path d="M13.0875 4.30299C13.5966 3.27151 15.0675 3.27151 15.5765 4.30299L17.8665 8.94293C18.0686 9.35253 18.4594 9.63643 18.9114 9.70211L24.0319 10.4462C25.1702 10.6116 25.6247 12.0104 24.801 12.8133L21.0958 16.425C20.7687 16.7438 20.6195 17.2032 20.6967 17.6534L21.5714 22.7532C21.7658 23.8869 20.5759 24.7514 19.5577 24.2162L14.9778 21.8084C14.5735 21.5958 14.0905 21.5958 13.6862 21.8084L9.10634 24.2162C8.08821 24.7514 6.89826 23.8869 7.0927 22.7532L7.96739 17.6534C8.0446 17.2032 7.89534 16.7438 7.56826 16.425L3.86305 12.8133C3.03936 12.0104 3.49388 10.6116 4.63219 10.4462L9.75266 9.70211C10.2047 9.63643 10.5954 9.35253 10.7976 8.94293L13.0875 4.30299Z" fill="#FFC100" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <div className="reviews2">{box.reviews}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="cta-button-frame">
                                            <div className="cta-button3">
                                                <b className="cta-text3">Consult Now</b>
                                            </div>
                                        </button>
                                        <button className="cta-button-wrapper1">
                                            <div className="cta-button4">
                                                <b className="cta-text4">Visit Profile</b>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <FooterSeaWireFooter />
        </>
    )
}

export default GetConsultation;