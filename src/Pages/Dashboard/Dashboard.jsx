import { Flex } from "@chakra-ui/react";
import SideNav from "../../Components/SideNav";
import TopNav from "../../Components/TopNav";

const Dashboard = ({ props }) => {
  return (
    <>
      <Flex bg="gray.200">
        <SideNav />
        <TopNav />
      </Flex>
    </>
  );
};
export default Dashboard;
