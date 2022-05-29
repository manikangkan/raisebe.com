import TextareaAutosize from "react-textarea-autosize";
import SocialInfo from "../components/SocialInfo";

const Contact = () => {
  return (
    <section className="max-w-6xl w-full mx-auto space-y-8 p-4 xl:px-0 xl:py-8">
      <h1 className="font-bold text-4xl">Contact us</h1>
      <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-slate-50 rounded-lg">
          <form className="flex flex-col p-8 space-y-8">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Contact no" />
            <TextareaAutosize minRows={4} type="text" placeholder="Message" />
            <button
              className="px-6 py-2 rounded-md border border-blue-500 text-white bg-blue-500 bg-transparent font-semibold text-sm hover:opacity-95"
              type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-span-1 bg-slate-50 rounded-lg p-8 space-y-8">
          <SocialInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
