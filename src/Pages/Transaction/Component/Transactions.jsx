import {
  Button,
  Card,
  Container,
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import TableComponent from "./TableComponent";

const tablists = [
  {
    name: "all",
    count: 349,
  },
  {
    name: "Deposit",
    count: 114,
  },
  {
    name: "withdraw",
    count: 213,
  },
  {
    name: "trade",
    count: 52,
  },
];

const Transactions = ({ props }) => {
  return (
    <Container
      maxW="container.lg"
      rounded="lg"
      py="3"
      px={{
        base: "2",
        md: "4",
        lg: "6",
      }}
    >
      <Flex justify={"end"}>
        <Button
          color={"white"}
          bg={"teal"}
          leftIcon={<Icon fontSize={"2xl"} as={AiOutlineDownload} />}
        >
          Insert CV
        </Button>
      </Flex>
      <Card mt={1.5}>
        <Tabs>
          <TabList>
            {tablists.map((tab) => (
              <Tab key={tab.name}>
                <Flex>
                  <Text
                    textTransform={"capitalize"}
                    fontSize={"sm"}
                    color={"black"}
                    mr={2}
                  >
                    {tab.name}
                  </Text>
                  <Tag fontSize={"10px"} fontWeight={"sm"} color={"gray.500"}>
                    {tab.count}
                  </Tag>
                </Flex>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TableComponent />
            </TabPanel>
            <TabPanel>
              <TableComponent />
            </TabPanel>
            <TabPanel>
              <TableComponent />
            </TabPanel>
            <TabPanel>
              <TableComponent />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Container>
  );
};
export default Transactions;
