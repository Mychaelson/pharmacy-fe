import { Flex, Heading } from "@chakra-ui/react";
import CreditCard from "../../../components/CreditCard";
import Sidebar from "../../../components/Sidebar";
import Transaction from "../../../components/Transaction";

const DashboardHomePage = () => {
  return (
    <>
      <Heading>
        <title>Dashboard</title>
      </Heading>
      <Flex
        h={[null, null, "100vh"]}
        flexDirection={["column", "column", "row"]}
        overflow="hidden"
        maxW="2000px"
      >
        {/* Column 1 */}
        <Sidebar />

        {/* Column 2 */}
        <Transaction />

        {/* Column 3 */}
        <CreditCard />
      </Flex>
    </>
  );
};

export default DashboardHomePage;
