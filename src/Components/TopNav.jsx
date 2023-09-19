import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";

const TopNav = ({ props }) => {
  return (
    <Box bg="white" width="100%" h="16">
      <Flex
        justify="space-between"
        m="auto"
        alignItems="center"
        w={{
          base: "16rem",
          md: "85%",
        }}
        height="full"
      >
        <Heading
          textTransform="capitalize"
          as="h1"
          fontSize={{
            base: "1xl",
            md: "4xl",
            lg: "4xl",
          }}
        >
          dashboard
        </Heading>
        <Menu>
          <MenuButton
            bg="white"
            as={Button}
            _hover={{ bg: "white" }}
            rightIcon={<Icon as={BsChevronDown} />}
          >
            <Icon
              fontSize={{
                base: "1xl",
                md: "2xl",
                lg: "3xl",
              }}
              as={FaRegUserCircle}
            />
          </MenuButton>
          <MenuList>
            <MenuItem textTransform="capitalize">
              <Icon fontSize="24px" mr="8px" as={HiOutlineLogout} /> logout
            </MenuItem>
            <MenuItem textTransform="capitalize">
              <Icon fontSize="24px" mr="8px" as={MdOutlineSupportAgent} />
              support
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default TopNav;
