import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
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
      link: "/transactions",
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
            <HStack
              key={nav.id}
              cursor="pointer"
              px="3"
              py="2"
              bg="gray.100"
              rounded="md"
              _hover={{ bg: "gray.200", fontWeight: "semibold" }}
            >
              <Icon as={nav.icon} />
              <Text textTransform="capitalize">{nav.text}</Text>
            </HStack>
          ))}
        </Stack>
      </Box>
      <Box pb="4">
        <HStack
          cursor="pointer"
          px="3"
          py="2"
          bg="gray.100"
          rounded="md"
          _hover={{ bg: "gray.200", fontWeight: "semibold" }}
        >
          <Icon as={BiSupport} />
          <Text textTransform="capitalize">Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};
export default SideNav;
