import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContactRef from "../Hooks/useContactRef";
import { db } from "../config/Firebase";
import AddOrUpdateContact from "./AddOrUpdateContact";
import ContactCard from "./ContactCard";
import Navbar from "./Navbar";
import NoContact from "./NoContact";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useContactRef();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
          return contactsList;
        });
      } catch (error) {
        return <h1>{error}</h1>;
      }
    };

    getContacts();
  }, []);

  const FilteredText = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const FilterContact = contactsList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(FilterContact);
      return FilterContact;
    });
  };

  return (
    <section className=" bg-gray-800 min-h-screen m-auto">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[380px] pt-3 gap-3">
          <Navbar />
          <div className="flex items-center justify-between">
            <FiSearch className="absolute text-white text-5xl px-2" />
            <input
              onChange={FilteredText}
              className="bg-gray-800 pl-10 pr-2 py-2 border rounded-md placeholder-white text-white w-[340px]"
              type="text"
              placeholder="Search Contact"
            />
            <div className="flex align-middle">
              <BsPlusCircleFill
                className="text-white text-4xl cursor-pointer hover:text-gray-700 hover:bg-white hover:border-2 hover:border-white rounded-[50%]"
                onClick={onOpen}
              />
            </div>
          </div>
          { contacts.length === 0 ?
          <NoContact /> : <>
          <div className="flex items-center gap-3 justify-between flex-wrap">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
          </>}
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-center">
          <AddOrUpdateContact onClose={onClose} isOpen={isOpen} />
        </div>
      )}

      <ToastContainer />
    </section>
  );
};
export default ContactPage;
