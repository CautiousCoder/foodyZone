import {
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsArrowUpRight, BsFillPlusCircleFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";

const CurrentPrize = ({ props }) => {
  const timeStamps = ["4:30pm", "6:00pm", "7:30pm", "9:00pm", "10:30pm"];
  return (
    <GridItem
      px={{
        base: "2",
        sm: "3",
        md: "4",
      }}
      pt="3"
      bg="white"
      rounded="lg"
      rowSpan={2}
      colSpan={1}
    >
      <Stack>
        <Flex justify="space-between">
          <Stack>
            <Text
              textTransform="capitalize"
              fontSize="medium"
              fontWeight="medium"
            >
              current Prize
            </Text>
            <Flex>
              <Heading
                fontSize={{
                  base: "18px",
                  md: "2xs",
                  lg: "2xl",
                }}
              >
                <Icon fontSize="2xl" mb="-1.5" as={TbCurrencyTaka} />
                26,670.25
              </Heading>
              <HStack ml={3}>
                <Icon
                  as={BsArrowUpRight}
                  fontSize="10px"
                  mr="-4"
                  fontWeight="bold"
                />
                <Tag colorScheme="white" color="green">
                  0.04%
                </Tag>
              </HStack>
            </Flex>
          </Stack>
          <Stack spacing="2" direction="row" align="center">
            <Button
              leftIcon={<Icon as={BsFillPlusCircleFill} />}
              textTransform="capitalize"
              colorScheme="teal"
              size="sm"
            >
              buy
            </Button>
            <Button
              leftIcon={<Icon as={AiFillMinusCircle} />}
              textTransform="capitalize"
              colorScheme="teal"
              size="sm"
            >
              sell
            </Button>
          </Stack>
        </Flex>
        <Flex justify="right">
          <Tabs variant="soft-rounded" colorScheme="teal" align="end">
            <TabList display="inline-flex" bg="gray.200" px={2} rounded="md">
              <Tab>1H</Tab>
              <Tab>1D</Tab>
              <Tab>1W</Tab>
              <Tab>1M</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack>
                  <Image
                    w="100%"
                    src="/src/assets/Images/chart.PNG"
                    alt="Loading"
                  />
                  <Flex justify="space-between">
                    {timeStamps.map((time) => (
                      <Text key={time}>{time}</Text>
                    ))}
                  </Flex>
                </Stack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>
    </GridItem>
  );
};
export default CurrentPrize;
