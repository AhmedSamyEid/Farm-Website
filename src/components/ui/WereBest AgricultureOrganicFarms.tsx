export default function WereBestAgricultureOrganicFarms() {
  const icons = [
    { img: "/public/icons/Heading 2 → Agriculture.png", title: "Agriculture" },
    { img: "/public/icons/Vector56+.png", title: "Agriculture" },
    { img: "/public/icons/Heading 2 → Farming.png", title: "Agriculture" },
    { img: "/public/icons/Vector56+.png", title: "Agriculture" },
    { img: "/public/icons/Heading 2 → Organic.png", title: "Agriculture" },
  ];
  type FeatureItemProps = {
    icon: string;
    text: string;
  };

  const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
    <div className="flex items-center gap-3">
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-sm text-gray-800">{text}</span>
    </div>
  );
  return (
    <>
      <div className="bg-white  rounded-2xl  flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto gap-6  ">
        <div className="">
          <img className="w-150" src="/image/about-img.png" />
        </div>
        <div className="">
          <h2 className="text-5xl font-bold">
            We’re Best Agriculture & <br />
            Organic Farms
          </h2>
          <br />
          <br />
          <p>
            Greetings from Dosner Organic Farms.We distribute only organic
            <br />
            herbs and produce directly to consumers.
          </p>
          <br />
          <div className="flex flex-col md:flex-row gap-10">
            <div className="space-y-4 ">
              <FeatureItem icon="/icons/Vector.png" text="Gourmet Mushrooms" />
              <FeatureItem
                icon="/icons/Vector.png"
                text="Natural Healthy Products"
              />
              <FeatureItem icon="/icons/Vector.png" text="Lavender Farming" />
            </div>

            <div className="space-y-4">
              <FeatureItem
                icon="/icons/Vector.png"
                text="Best Quality Standards"
              />
              <FeatureItem
                icon="/icons/Vector.png"
                text="Fertilizer Distribution"
              />
              <FeatureItem icon="/icons/Vector.png" text="Organic Fertilizer" />
            </div>
          </div>
          <button className="bg-green-600 text-white  rounded-3xl p-2 mt-5">
            Know More
          </button>
          <div className="bg-white p-5"></div>
        </div>
      </div>

      <div className="bg-green-700 p-5  flex flex-col mt-30 md:flex-row justify-around ">
        {icons.map((item) => (
          <div className="w-50">
            <img src={item.img} />
          </div>
        ))}
      </div>
    </>
  );
}
