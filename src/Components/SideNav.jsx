import { Box, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

import { Link } from "react-router-dom";
import NavItemComponent from "./NavItemComponent";
const SideNav = ({ props }) => {
  const navlinks = [
    {
      id: 1,
      icon: RxDashboard,
      text: "dashboard",
      link: "/",
    },
    {
      id: 2,
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack justify="space-between" height="100%" maxW="16rem" bg="white" p="2">
      <Box>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="24px"
          my="20px"
          textAlign="center"
        >
          @CodePractice
        </Text>
        <Stack direction="column">
          {navlinks.map((nav) => (
            <Link to={nav.link} key={nav.id}>
              <NavItemComponent text={nav.text} icon={nav.icon} />
            </Link>
          ))}
        </Stack>
      </Box>
      <Box pb="4">
        <Link to={"/support"}>
          <NavItemComponent text={"Support"} icon={BiSupport} />
        </Link>
      </Box>
    </Stack>
  );
};
export default SideNav;
