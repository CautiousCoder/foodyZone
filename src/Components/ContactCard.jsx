import { deleteDoc, doc } from "firebase/firestore";
import { FaTrash } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import useContactRef from "../Hooks/useContactRef";
import { db } from "../config/Firebase";
import AddOrUpdateContact from "./AddOrUpdateContact";

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useContactRef();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully.");
    } catch (error) {
      toast.warning("Contact Deleted Failed.!");
    }
  };
  return (
    <>
      <div
        className="flex border rounded-md bg-yellow-300 justify-between p-2 w-full gap-2"
        key={contact.id}
      >
        <IoMdContact className=" text-orange-500 text-5xl" />
        <div className="flex flex-col gap-1">
          <h2 className=" font-semibold text-lg">{contact.name}</h2>
          <p className=" text-orange-500 cursor-pointer hover:text-orange-700">
            {contact.email}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <RiEditCircleLine
            onClick={onOpen}
            className=" text-black text-4xl cursor-pointer hover:text-orange-400"
          />
          <FaTrash
            onClick={() => deleteContact(contact.id)}
            className=" text-orange-500 text-3xl cursor-pointer hover:text-orange-400"
          />
        </div>
      </div>
      <AddOrUpdateContact
        contact={contact}
        isUpdate
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};
export default ContactCard;
