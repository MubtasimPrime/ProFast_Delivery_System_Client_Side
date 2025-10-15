import React from "react";
import Banner from "../../components/Home/Banner";
import Works from "../../components/Home/Works";
import Service from "../../components/Home/Service/Service";
import SalesTeams from "../../components/Home/SalesTeams";
import Tracking from "../../components/Home/Tracking/Tracking";
import Merchant from "../../components/Home/Merchant";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Works></Works>
      <Service></Service>
      <SalesTeams></SalesTeams>
      <Tracking></Tracking>
      <Merchant></Merchant>
    </>
  );
};

export default Home;
