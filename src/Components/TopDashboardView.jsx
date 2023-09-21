import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
const TopDashboardView = ({ props }) => {
  return (
    <Container
      maxW="container.lg"
      bg="white"
      rounded="lg"
      py="3"
      px={{
        base: "2",
        md: "4",
        lg: "6",
      }}
    >
      <Flex
        justify="space-between"
        flexDirection={{
          base: "column",
          xl: "row",
        }}
        gap={{
          base: "4",
          lg: "3",
        }}
      >
        <Stack
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          gap={{
            base: "2",
            lg: "4",
          }}
        >
          <Stack>
            <HStack>
              <Text
                textTransform="capitalize"
                fontWeight="semibold"
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                total portfolio value
              </Text>
              <Icon fontWeight="bold" as={BsInfoCircle} />
            </HStack>
            <HStack>
              <Icon
                mt="1"
                mr="-3"
                fontSize={{
                  base: "3xl",
                }}
                as={TbCurrencyTaka}
              />
              <Heading as="h1" fontSize={"2xl"}>
                112,312.24
              </Heading>
            </HStack>
          </Stack>
          <Stack>
            <Text
              textTransform="capitalize"
              fontWeight="semibold"
              fontSize={{
                base: "14px",
                lg: "16px",
              }}
            >
              wallet balances
            </Text>
            <Flex gap={4}>
              <HStack>
                <Heading as="h1" fontSize={"2xl"}>
                  22.39401000
                </Heading>
                <Tag textTransform="uppercase" colorScheme="gray">
                  btc
                </Tag>
              </HStack>
              <HStack>
                <Icon
                  mt="1"
                  mr="-3"
                  fontSize={{
                    base: "3xl",
                  }}
                  as={TbCurrencyTaka}
                />
                <Heading as="h1" fontSize={"2xl"}>
                  1,300.00
                </Heading>
                <Tag textTransform="uppercase" colorScheme="gray">
                  taka
                </Tag>
              </HStack>
            </Flex>
          </Stack>
        </Stack>
        <Stack spacing="4" direction="row" align="center">
          <Button
            leftIcon={<Icon as={BiSolidArrowToBottom} />}
            textTransform="capitalize"
            colorScheme="teal"
            size="md"
          >
            diposit
          </Button>
          <Button
            leftIcon={<Icon as={BiSolidArrowToTop} />}
            textTransform="capitalize"
            colorScheme="teal"
            size="md"
          >
            withdraw
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};
export default TopDashboardView;
