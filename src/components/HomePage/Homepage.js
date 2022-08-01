import React from "react";
import AboutUs from "./About Us/AboutUs";
import BannerSection from "./BannerSection/BannerSection";
import Cards from "./cards/Cards";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";
import Features from "./Features/Features";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import QuickLink from "./QuickLinks/QuickLinks";
import Statistics from "./Statistics/Statistics";
import Subscribe from "./Subscribe/Subscribe";
import UpcomingExam from "./UpcomingExam/UpcomingExam";
import Footer from "./Footer/Footer";

const HomePage = () =>{
    return(
        <React.Fragment>
            <Header /><br/>
            <Navbar />
            <BannerSection />
            <QuickLink />
            <UpcomingExam />
            <Cards  />
            <Statistics />
            <Events />
            <AboutUs />
            <Features />
            <Subscribe />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;