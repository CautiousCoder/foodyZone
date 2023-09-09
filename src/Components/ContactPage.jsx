import { BsPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (error) {
        return <h1>{error}</h1>;
      }
    };

    getContacts();
  }, []);

  return (
    <section className="flex justify-center  bg-gray-800 text-center min-h-screen">
      <div className="flex flex-col pt-3 gap-3">
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
        <div className="flex items-center gap-3 justify-between">
          {contacts.map((contact) => (
            <div
              className="flex border rounded bg-yellow-300 justify-between p-3 w-full gap-2"
              key={contact.id}
            >
              <IoMdContact className=" text-orange-500 text-5xl" />
              <div className="flex flex-col gap-1">
                <h2 className=" font-semibold text-lg">{contact.name}</h2>
                <p className=" text-orange-500 cursor-pointer">
                  {contact.email}
                </p>
              </div>
              <div className="flex gap-1">
                <RiEditCircleLine className=" text-orange-500 text-5xl cursor-pointer" />
                <FaTrash className=" text-orange-500 text-5xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
