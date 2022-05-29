import Card from "../components/Card";
import Slider from "./Slider";

const data = [
  {
    image: "https://www.raisebe.com/Images/Careers/UI.gif",
    title: "UI/UX & Front-end Expert",
    description:
      "We are looking for someone who is an expert in UI design, UX design, and front-end development to join our growing company.",
  },
  {
    image: "https://www.raisebe.com/Images/Careers/Flutter%20(1).gif",
    title: "Flutter Developer",
    description:
      "We are looking for someone who is an expert in developing and maintain existing flutter applications.",
  },
];

const images = [
  {
    url: "https://i.graphicmama.com/blog/wp-content/uploads/2017/03/27110752/a13f2134468827.56d1cd7e4b802.jpg",
  },
  {
    url: "https://www.scad.edu/sites/default/files/styles/swarm2x1_1500/public/Academics/Illustration/Tim-Kaminski_Illustration_Drummond-A1-Workshop.jpg",
  },
];

const Careers = () => {
  return (
    <section>
      {/* media */}
      <Slider images={images} />
      <div className="max-w-6xl mx-auto p-4 xl:px-0 xl:py-8 space-y-8">
        <div className="space-y-4 leading-relaxed">
          <h1 className="font-bold text-4xl">Explore opportunities</h1>
          <div className="space-y-4">
            <p>What’s destination next?</p>
            <p>Is it better technology?</p>
            <p> A better you?</p>
            <p>Or a better community of makers?</p>
            <p>
              Wherever you desire to go, we give you the tools, the techniques,
              and the teams to navigate the journey. So you’re inspired to build
              what’s next, ensure your career never stands still, and navigate
              further together. Move forward. Take the world with you.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
