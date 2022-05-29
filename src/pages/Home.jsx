import Section from "../components/Section";

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto p-4 xl:px-0 xl:py-8 space-y-8">
      {/* section 1 */}
      <Section
        title="Partner with us to raise your business"
        subtitle="We are the platform that gives you the freedom to focus on business with helping out with wide range of business solution."
        url="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/61f723b06f70e0880ae3c656_DrawKit%20Webflow%20Grid-min.png"
      />
      {/* section 2 */}
      <Section
        isReverse
        title="360 degree solution for restaurant owners"
        subtitle="Our bookmyorders platform is helping many restaurant owners to manage there business with 360 degree from customer handling to supply chain management."
        url="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/61c40ea03f82eb5af75d8d2a_DrawKit%20Webflow%20Grid-min.png"
      />
      {/* section 3 */}
      <Section
        title="PartnerChat Based Ecommerce platform"
        subtitle="Our bookmyorders is a free platform to individuals provide wide range of local shops details with placing the order from home."
        url="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/613e3a95107b652ed1773ccd_DrawKit-Mental-Health-Wellbeing-Illustrations-grid.png"
      />
    </main>
  );
};

export default Home;
