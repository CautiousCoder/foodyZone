import { BsPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Navbar from "./Navbar";
const ContactPage = () => {
  return (
    <section className="flex justify-center  bg-gray-800 text-center min-h-screen">
      <div className="flex flex-col max-w-xl p-2 gap-3">
        <Navbar />
        <div className="relative flex items-center justify-between">
          <FiSearch className="absolute text-white text-5xl px-2" />
          <input
            className="bg-gray-800 pl-10 pr-2 py-2 border rounded-md placeholder-white text-white w-[340px]"
            type="text"
            placeholder="Search Contact"
          />
          <div className="flex align-middle">
            <BsPlusCircleFill className="text-white text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
