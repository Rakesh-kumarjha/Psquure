import React from 'react';
import Banner from "../BANNER/Banner";
// import Button from "../../common/Page_Cart_Details/Button";
import Sidenavbar from '../Page_Cart_Details/Sidenavbar';
import Card_deatils_page from '../Page_Cart_Details/Card_deatils_page';
import Earrings from "../../Assests/old_banners_1.jpeg"

const Page_Cart_details = () => {
    return (
        <div className="Page_Cart_details">

            {/* Banner Section */}
            <section className="">
                <Banner
                    title="Welcome to our website"
                    description="Explore and discover amazing things"
                    imageUrl={Earrings}
                />
            </section>


            <main>

                <section className="">
                    <Sidenavbar />
                </section>
                <hr className='container' />


                <section className="container">
                    <Card_deatils_page />
                </section>
            </main>

        </div>
    );
}

export default Page_Cart_details;
