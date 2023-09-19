import { Box, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex bg="gray.200">
        <Box
          height="100vh"
          m="0"
          display={{
            base: "none",
            md: "block",
          }}
        >
          <SideNav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
        <Stack width="full">
          <TopNav title={title} onOpen={onOpen} />
          <Box
            mt={{
              base: "3",
              md: "5",
              lg: "7",
            }}
            mx={{ base: "2", md: "3", lg: "5" }}
          >
            {children}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
export default DashboardLayout;
