import Card from "../components/Card";
import Slider from "./Slider";

const data = [
  {
    image: "https://www.raisebe.com/Images/Learning/Python%20Training.gif",
    title: "Python Foundation",
    description: "Course Fee INR 5000",
  },
  {
    image:
      "https://www.raisebe.com/Images/Learning/Automation%20Anywhere%20Training.gif",
    title: "Automation Anywhere",
    description: "Course Fee INR 20000",
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

const Training = () => {
  return (
    <section>
      {/* media */}
      <Slider images={images} />
      <div className="max-w-6xl mx-auto p-4 xl:px-0 xl:py-8 space-y-8">
        <div className="space-y-8 leading-relaxed">
          <h1 className="font-bold text-4xl">Explore Training Courses</h1>
          <ul className="space-y-4">
            <li>What’s destination next?</li>
            <li>Is it better technology?</li>
            <li> A better you?</li>
            <li>Or a better community of makers?</li>
            <li>
              Wherever you desire to go, we give you the tools, the techniques,
              and the teams to navigate the journey. So you’re inspired to build
              what’s next, ensure your career never stands still, and navigate
              further together. Move forward. Take the world with you.
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              isKnowmore
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
