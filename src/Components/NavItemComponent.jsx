import { HStack, Icon, Text } from "@chakra-ui/react";

const NavItemComponent = ({ icon, text }) => {
  return (
    <HStack
      cursor="pointer"
      px="3"
      py="2"
      bg="gray.100"
      rounded="md"
      _hover={{ bg: "gray.200", fontWeight: "semibold" }}
    >
      <Icon as={icon} />
      <Text textTransform="capitalize">{text}</Text>
    </HStack>
  );
};
export default NavItemComponent;
