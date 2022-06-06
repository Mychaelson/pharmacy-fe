import {
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import MyChart from "../../components/MyChart";

const Transaction = () => {
  return (
    <Flex
      w={["100%", "100%", "60%", "60%", "55%"]}
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
    >
      <Heading fontWeight="normal" mb={4} letterSpacing="tight">
        Welcome back,{" "}
        <Flex fontWeight="bold" display="inline">
          Wahyu
        </Flex>
      </Heading>
      <Text color="gray" fontSize="sm">
        My Balance
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        $1,253.00
      </Text>
      <MyChart />
      <Flex justifyContent="space-between" mt={2}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Transaction
          </Heading>
          <Text fontSize="small" color="gray" ml={4}>
            Apr 2021
          </Text>
        </Flex>
        <IconButton icon={<FiCalendar />} />
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
          <Table variant="unstyled" mt={4}>
            <Thead>
              <Tr color="gray">
                <Th>Name of Transactions</Th>
                <Th>Category</Th>
                <Th isNumeric>Cashback</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td>Electronic Devices</Td>
                <Td isNumeric>+2$</Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$242
                  </Text>
                  .00
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Transaction;
