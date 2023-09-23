import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = ({ props }) => {
  const [fname, setFname] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const fNameChange = (e) => setFname(e.target.value);
  const surNameChange = (e) => setSurName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const handleInputChange = (e) => setValue(e.target.value);

  //   const isFNameError = fname === "";
  //   const isSurNameError = surname === "";
  //   const isEmailError = surname === "";

  return (
    <GridItem
      rounded="lg"
      rowSpan={1}
      colSpan={1}
      bg={"white"}
      px={{
        base: "2",
        sm: "3",
        md: "4",
      }}
      py="2"
    >
      <Stack spacing={3} pb={3}>
        <Flex gap={3}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={fname}
              onChange={fNameChange}
              placeholder="James"
              size={"sm"}
              rounded={"md"}
            />
            {/* {!isFNameError ? (
              <FormHelperText>Enter your first name.</FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )} */}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Surname</FormLabel>
            <Input
              type="text"
              value={surname}
              onChange={surNameChange}
              placeholder="Arthur"
              size={"sm"}
              rounded={"md"}
            />
            {/* {!isSurNameError ? (
              <FormHelperText>Enter your surname.</FormHelperText>
            ) : (
              <FormErrorMessage>Surname is required.</FormErrorMessage>
            )} */}
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={emailChange}
            placeholder="name@mail.com"
            size={"sm"}
            rounded={"md"}
          />
          {/* {!isEmailError ? (
            <FormHelperText>Enter your first name.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )} */}
        </FormControl>
        <FormControl>
          <FormLabel>Write a Message</FormLabel>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
            rounded={"md"}
          />
        </FormControl>
        <HStack>
          <Checkbox size="sm" colorScheme="purple">
            I agree with{" "}
            <Text color={"purple.400"} as="span">
              Terms & Conditions
            </Text>
          </Checkbox>
        </HStack>
        <Button colorScheme="teal" size="sm">
          Send a Message
        </Button>
        <Button colorScheme="gray" size="sm">
          Book a Meeting
        </Button>
      </Stack>
    </GridItem>
  );
};
export default ContactForm;
