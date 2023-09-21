import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
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
import {
  AiFillMinusCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import {
  BsArrowUpRight,
  BsCurrencyDollar,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const MiddleDashboardView = ({ props }) => {
  const timeStamps = ["4:30pm", "6:00pm", "7:30pm", "9:00pm", "10:30pm"];

  const transactions = [
    {
      id: 1,
      nameIcon: TbCurrencyTaka,
      token: "TAKA",
      sell: false,
      date: new Date().toUTCString(),
      plusIcon: AiOutlinePlus,
      minusIcon: AiOutlineMinus,
      dollerIcon: BsCurrencyDollar,
      amount: "81,123.10",
    },
    {
      id: 2,
      nameIcon: FaBtc,
      token: "BTC",
      sell: true,
      date: new Date().toUTCString(),
      plusIcon: AiOutlinePlus,
      minusIcon: AiOutlineMinus,
      dollerIcon: BsCurrencyDollar,
      amount: "12.12310",
    },
    {
      id: 3,
      nameIcon: TbCurrencyTaka,
      token: "TAKA",
      sell: false,
      date: new Date().toUTCString(),
      plusIcon: AiOutlinePlus,
      minusIcon: AiOutlineMinus,
      dollerIcon: BsCurrencyDollar,
      amount: "81,123.10",
    },
  ];
  return (
    <Container maxW="container.lg" mt="6" px="0">
      <Grid
        minH="80"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={4}
      >
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
                <TabList
                  display="inline-flex"
                  bg="gray.200"
                  px={2}
                  rounded="md"
                >
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
        <GridItem
          bg="white"
          rounded="lg"
          rowSpan={2}
          colSpan={1}
          px={{
            base: "2",
            sm: "3",
            md: "4",
          }}
          py="3"
        >
          <Stack>
            <Text
              textTransform="capitalize"
              fontSize="medium"
              fontWeight="medium"
            >
              recent transactions
            </Text>
            {transactions.map((trans) => (
              <Box key={trans.id}>
                {trans.id > 1 ? <Divider py="1" /> : ""}
                <Flex justify="space-between" mt={2}>
                  <Flex justify="space-between" alignItems="center">
                    <Icon
                      bg="gray.200"
                      rounded="lg"
                      px="2"
                      fontSize="4xl"
                      as={trans.nameIcon}
                    />
                    <Stack ml="3">
                      <Heading as="h2" fontSize="18px">
                        {trans.token}: {trans.sell ? "Sell" : "Diposit"}
                      </Heading>
                      <Text
                        fontSize={{
                          base: "12px",
                          lg: "14px",
                        }}
                        fontWeight="medium"
                      >
                        {trans.date}
                      </Text>
                    </Stack>
                  </Flex>
                  <Stack>
                    <Heading as="h2" fontSize="18px">
                      <Icon
                        fontSize="sm"
                        mb="-0.5"
                        as={trans.sell ? trans.minusIcon : trans.plusIcon}
                      />
                      {trans.sell ? (
                        ""
                      ) : (
                        <Icon
                          fontSize="2xl"
                          mb="-1"
                          mr="-1"
                          as={trans.nameIcon}
                        />
                      )}{" "}
                      81,123.10 {trans.sell ? "BTC" : ""}
                    </Heading>
                    {trans.sell ? (
                      <Text align="end">
                        <Icon fontSize="sm" mb="-0.5" as={trans.plusIcon} />
                        <Icon fontSize="sm" mb="-0.5" as={trans.dollerIcon} />
                        81,123.10
                      </Text>
                    ) : (
                      ""
                    )}
                  </Stack>
                </Flex>
              </Box>
            ))}
            <Button
              textTransform="capitalize"
              colorScheme="teal"
              size="md"
              w="full"
              alignContent="center"
            >
              view all
            </Button>
          </Stack>
        </GridItem>
        <GridItem
          bg="white"
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
          <Stack gap={1}>
            <Tag
              as="span"
              maxW={16}
              textTransform="capitalize"
              fontSize="medium"
              bg={"teal"}
              py={2}
              px={3}
              color={"white"}
            >
              loans
            </Tag>
            <Text fontWeight="sm" fontSize={{ base: "12px", md: "14px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              alias omnis dolore quia eos animi.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          bg="white"
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
          <Stack gap={1}>
            <Tag
              as="span"
              maxW={20}
              textTransform="capitalize"
              fontSize="medium"
              bg={"teal"}
              py={2}
              px={3}
              color={"white"}
            >
              contact
            </Tag>
            <Text fontWeight="sm" fontSize={{ base: "12px", md: "14px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              alias omnis dolore quia eos animi.
            </Text>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};
export default MiddleDashboardView;
