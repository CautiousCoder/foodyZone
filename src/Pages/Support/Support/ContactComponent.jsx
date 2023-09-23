import { GridItem, Icon, Stack, Text } from "@chakra-ui/react";

const ContactComponent = ({ icon, name, children }) => {
  return (
    <GridItem
      rounded="lg"
      rowSpan={1}
      colSpan={1}
      px={{
        base: "2",
        sm: "3",
        md: "4",
      }}
      py="2"
      borderColor={"white"}
      borderWidth={"1px"}
    >
      <Stack>
        <Icon as={icon} />
        <Text
          as="h2"
          fontSize={"md"}
          textTransform={"capitalize"}
          fontWeight={"medium"}
          color={"black"}
        >
          {name}
        </Text>
        <Text fontWeight="sm" fontSize={{ base: "12px", md: "14px" }}>
          {children}
        </Text>
      </Stack>
    </GridItem>
  );
};
export default ContactComponent;
