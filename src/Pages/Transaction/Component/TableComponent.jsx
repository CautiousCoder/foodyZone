import {
  Icon,
  Stack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";

const TransactionList = [
  {
    id: "HD82NA1H",
    date: "2023-09-24",
    time: "07:48pm",
    type: {
      name: "Taka Deposit",
      status: "E-Transfer",
    },
    amount: "81,123.10",
    totalAmount: 19.37884,
    status: "pending",
    transaction: true,
  },
  {
    id: "HD82NA2H",
    date: "2023-09-22",
    time: "07:48pm",
    type: {
      name: "Taka Withdraw",
      status: "Wire-Transfer",
    },
    amount: "81,123.10",
    totalAmount: 19.37884,
    status: "processing",
    transaction: false,
  },
  {
    id: "HD82NA3H",
    date: "2023-09-22",
    time: "07:48pm",
    type: {
      name: "Buy",
      status: "",
    },
    amount: "81,123.10",
    totalAmount: 19.37884,
    status: "cancelled",

    transaction: true,
  },
  {
    id: "HD82NA4H",
    date: "2023-09-22",
    time: "07:48pm",
    type: {
      name: "Sell",
      status: "",
    },
    amount: "81,123.10",
    totalAmount: 19.37884,
    status: "completed",
    transaction: false,
  },
  {
    id: "HD82NA5H",
    date: "2023-09-22",
    time: "07:48pm",
    type: {
      name: "BTC Deposit",
      status: "",
    },
    amount: "481.12310",
    totalAmount: 9378.4584,
    status: "completed",
    transaction: true,
  },
  {
    id: "HD82NA6H",
    date: "2023-09-22",
    time: "07:48pm",
    type: {
      name: "BTC Withdraw",
      status: "",
    },
    amount: "112.38910",
    totalAmount: 13788.994,
    status: "completed",
    transaction: false,
  },
];
const statusColor = {
  pending: "#797E82",
  processing: "#F5A50B",
  completed: "#059669",
  cancelled: "#DC2626",
};
const TableComponent = ({ props }) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th
                py={1.5}
                px={4}
                fontWeight={"sm"}
                fontSize={"sm"}
                color={"gray.600"}
              >
                ID
              </Th>
              <Th
                py={1.5}
                px={4}
                fontWeight={"sm"}
                fontSize={"sm"}
                color={"gray.600"}
              >
                Date & Time
              </Th>
              <Th
                py={1.5}
                px={4}
                fontWeight={"sm"}
                fontSize={"sm"}
                color={"gray.600"}
              >
                Type
              </Th>
              <Th
                py={1.5}
                px={4}
                fontSize={"sm"}
                fontWeight={"sm"}
                color={"gray.600"}
              >
                Amount
              </Th>
              <Th
                py={1.5}
                px={4}
                fontSize={"sm"}
                fontWeight={"sm"}
                color={"gray.600"}
              >
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {TransactionList.map((trans) => (
              <Tr fontSize={"sm"} fontWeight={"medium"} key={trans.id}>
                <Td py={1.5} px={4}>
                  {trans.id}
                </Td>
                <Td py={1.5} px={4}>
                  <Stack spacing={0}>
                    <Text as="h3">{trans.date}</Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"sm"}
                      color={"gray.500"}
                      as="h4"
                    >
                      {trans.time}
                    </Text>
                  </Stack>
                </Td>
                <Td py={1.5} px={4}>
                  <Stack spacing={0}>
                    <Text as="h3">{trans.type.name}</Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"sm"}
                      color={"gray.500"}
                      as="h4"
                    >
                      {trans.type?.status}
                    </Text>
                  </Stack>
                </Td>
                <Td py={1.5} px={4}>
                  <Stack spacing={0}>
                    <Text as="h3">
                      {trans.transaction ? (
                        <Icon mb={"-1"} as={BsPlus} />
                      ) : (
                        <Icon mb={"-1"} as={BiMinus} />
                      )}
                      {trans.type?.status !== "" ? (
                        <Icon fontSize={"md"} mb={"-1"} as={TbCurrencyTaka} />
                      ) : (
                        ""
                      )}
                      {trans.amount}
                      {trans.type?.status === "" ? " BTC" : ""}
                    </Text>
                    <Text
                      as="h4"
                      fontSize={"xs"}
                      fontWeight={"sm"}
                      color={"gray.500"}
                    >
                      {trans.type?.status === "" ? <Icon as={BsPlus} /> : ""}
                      {trans.type?.status === "" ? trans.totalAmount : ""}
                    </Text>
                  </Stack>
                </Td>
                <Td py={1.5} px={4}>
                  <Tag
                    color={"white"}
                    py={2}
                    px={3}
                    bg={statusColor[trans.status]}
                    textTransform={"capitalize"}
                  >
                    {trans.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableComponent;
