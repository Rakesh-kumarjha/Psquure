import React from 'react';
import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faIdCard, faShield, faHeadset } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCardList = () => {
    AOS.init({
        duration: 1200,
      })
    const services = [
        {
            title: 'Worldwide Delivery',
            description: 'We offer competitive prices on our 100 million plus product any range.',
            icon: <FontAwesomeIcon icon={faTruck} />,
        },
        {
            title: 'Safe Payment',
            description: 'We offer competitive prices on our 100 million plus product any range.',
            icon: <FontAwesomeIcon icon={faIdCard} />,
        },
        {
            title: 'Shop With Confidence',
            description: 'We offer competitive prices on our 100 million plus product any range.',
            icon: <FontAwesomeIcon icon={faShield} />,
        },
        {
            title: '24/7 Support',
            description: 'We offer competitive prices on our 100 million plus product any range.',
            icon: <FontAwesomeIcon icon={faHeadset} />,
        },
    ];

    return (
        
        <section className="background" data-aos="fade-down-right">
        
            <div className='container divition'>
                
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
               
            </div>
          
        </section >
    );
};

export default ServiceCardList;
