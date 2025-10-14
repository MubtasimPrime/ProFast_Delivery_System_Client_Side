import Track1 from "../../../assets/tracking/live-track.png";
import Track2 from "../../../assets/tracking/safe-del.png";
import TrackingCard from "./TrackingCard";

const Tracking = () => {
  const data = [
    {
      img: Track1,
      title: "Live Parcel Tracking",
      desc: `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`,
    },
    {
      img: Track2,
      title: "100% Safe Delivery",
      desc: `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.`,
    },
    {
      img: Track2,
      title: "24/7 Call Center Support",
      desc: `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto border-y border-dashed border-[#03373d] mb-25 py-20">
      <div className="grid grid-cols-1 gap-6">
        {data.map((item, idx) => (
          <TrackingCard key={idx} item={item}></TrackingCard>
        ))}
      </div>
    </section>
  );
};

export default Tracking;
