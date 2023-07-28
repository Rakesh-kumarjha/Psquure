import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = () => {
    return (
        <div className="contact-form">
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">First Name *</label>
                    <input type="text" id="first-name" name="first-name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name *</label>
                    <input type="text" id="last-name" name="last-name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="your-email">Email Address *</label>
                    <input type="email" id="your-email" name="your-email" className="form-control" required />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="your-phone">Phone Number</label>
                    <input type="tel" id="your-phone" name="your-phone" className="form-control" />
                </div> */}
                <div className="form-group">
                    <label htmlFor="property-type">What is the reason ? *</label>
                    <select id="property-type" name="property-type" className="form-control" required>
                        <option value="">Select One</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Farm, Ranch, Land">Farm, Ranch, Land</option>
                        <option value="International Property">International Property</option>
                        <option value="Multi-Family Apartment or Motel">Multi-Family Apartment or Motel</option>
                        <option value="Single Family Residential">Single Family Residential</option>
                        <option value="Vacation Rental">Vacation Rental</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* <div className="form-group">
            <label>Have you signed an agreement with the buyer?</label>
            <div>
              <label>
                <input type="radio" name="agreement" value="Yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="agreement" value="No" />
                No
              </label>
            </div>
          </div> */}
                {/* <div className="form-group">
            <label>How do you identify yourself? *</label>
            <select id="identify" name="identify" className="form-control" required>
              <option value="">Select One</option>
              <option value="International Real Estate Investor">International Real Estate Investor</option>
              <option value="Novice Investment Property Owner">Novice Investment Property Owner</option>
              <option value="Experienced Investment Property Owner">Experienced Investment Property Owner</option>
              <option value="Near Retirement">Near Retirement</option>
              <option value="Just Starting">Just Starting</option>
              <option value="Referral Source/Taxpayer Advisor">Referral Source/Taxpayer Advisor</option>
            </select>
          </div> */}
                <div className="form-group">
                    <label htmlFor="helphow">How may we help you? *</label>
                    <textarea id="helphow" name="helphow" rows="5" className="form-control" required></textarea>
                </div>
                <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};



const Contact = () => {
    return (
        <div className="container my-4">
            <h3 className='text-center border-bottom fw-600'>Contact Form</h3>
            <div className="divition">
                <div className="">
                    <div className="contact-image">
                        <img src="./images/banner-1.png" alt="Contact Us" />
                        <br />
                        <img src="./images/banner-1.png" alt="Contact Us" />
                        <br />
                        {/* <img src="./images/banner-1.png" alt="Contact Us" /> */}
                    </div>
                </div>
                <div className="">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
