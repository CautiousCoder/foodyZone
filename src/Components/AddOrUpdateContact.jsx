import ContactForm from "./ContactForm";
import Modal from "./Modal";

const AddOrUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  return (
    <Modal isOpen={isOpen} isClose={onClose}>
      <ContactForm onClose={onClose} isUpdate={isUpdate} contact={contact} />
    </Modal>
  );
};
export default AddOrUpdateContact;
