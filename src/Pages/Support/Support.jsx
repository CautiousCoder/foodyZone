import { Box, Container, Grid } from "@chakra-ui/react";
import { BsChatFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import DashboardLayout from "../../Components/DashboardLayout";
import ChatbotComponent from "./Support/ChatbotComponent";
import ContactComponent from "./Support/ContactComponent";
import ContactForm from "./Support/ContactForm";

const Support = ({ props }) => {
  return (
    <DashboardLayout title={"support"}>
      <Box
        minH={{
          base: "calc(100vh - 84px)",
          md: "calc(100vh - 124px)",
        }}
      >
        <Container maxW="container.lg" px="0">
          <Grid
            minH="80"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={4}
          >
            <ContactComponent icon={GrMail} name={"contact us"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              qui.
            </ContactComponent>
            <ContactForm />
            <ContactComponent icon={BsChatFill} name={"live chat"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              qui.
            </ContactComponent>
            <ChatbotComponent btnText={"Chatbot"} inverter={true}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ChatbotComponent>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
export default Support;
