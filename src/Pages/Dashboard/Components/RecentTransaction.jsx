import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const RecentTransaction = ({ props }) => {
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
        <Text textTransform="capitalize" fontSize="medium" fontWeight="medium">
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
                    <Icon fontSize="2xl" mb="-1" mr="-1" as={trans.nameIcon} />
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
  );
};
export default RecentTransaction;
