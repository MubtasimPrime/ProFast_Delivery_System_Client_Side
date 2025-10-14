import Marquee from "react-fast-marquee";
import Brand1 from "../../assets/brands/casio.png";
import Brand2 from "../../assets/brands/amazon.png";
import Brand3 from "../../assets/brands/moonstar.png";
import Brand4 from "../../assets/brands/start.png";
import Brand5 from "../../assets/brands/start-people.png";
import Brand6 from "../../assets/brands/randstad.png";

const SalesTeams = () => {
  return (
    <section className="max-w-7xl mx-auto mb-25">
      <h1 className="primary-green font-extrabold text-2xl text-center">
        We've helped thousands of sales teams
      </h1>
      <Marquee className="mt-10" speed={80}>
        <div className="flex gap-12">
          <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
          <img src={Brand6} alt="" />
        </div>
      </Marquee>
    </section>
  );
};

export default SalesTeams;
