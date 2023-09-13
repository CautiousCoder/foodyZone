import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { db } from "../config/Firebase";
const ContactForm = ({ onClose, isUpdate, contact }) => {
  const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name field is Required."),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email field is Required."),
  });

  const AddContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact Added Successfully.");
      onClose();
    } catch (error) {
      toast.warning("Failed...");
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact Updated Successfully.");
      onClose();
    } catch (error) {
      toast.warning("Failed...");
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl capitalize font-semibold text-black">
        {isUpdate ? "update" : "add"} contact
      </h1>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        validationSchema={contactSchemaValidation}
        onSubmit={(valus) => {
          isUpdate ? UpdateContact(valus, contact.id) : AddContact(valus);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              type="text"
              className="border rounded-md border-gray-600 px-2 py-1"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className="border rounded-md border-gray-600 px-2 py-1"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            className=" capitalize self-end text-white bg-orange-500 rounded-md border border-orange-700 px-3 py-1.5 hover:bg-white hover:text-orange-700"
          >
            {isUpdate ? "update" : "add"}
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
