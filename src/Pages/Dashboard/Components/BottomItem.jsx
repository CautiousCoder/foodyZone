import { GridItem, HStack, Tag, Text } from "@chakra-ui/react";

const BottomItem = ({ btnText, inverter, children }) => {
  return (
    <GridItem
      bg={inverter ? "teal" : "white"}
      rounded="lg"
      rowSpan={1}
      colSpan={1}
      px={{
        base: "2",
        sm: "3",
        md: "4",
      }}
      py="2"
    >
      <Tag
        as="h4"
        textAlign={"center"}
        textTransform="capitalize"
        fontSize="medium"
        bg={inverter ? "white" : "teal"}
        py={1}
        px={3}
        mb={1}
        color={inverter ? "teal" : "white"}
      >
        {btnText}
      </Tag>
      <HStack>
        <Text
          fontWeight="sm"
          fontSize={{ base: "12px", md: "14px" }}
          color={inverter ? "white" : "balck"}
        >
          {children}
        </Text>
      </HStack>
    </GridItem>
  );
};
export default BottomItem;
