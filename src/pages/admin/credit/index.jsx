import { Heading } from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";

const DashboardCreditPage = () => {
  return (
    <>
      <Heading>
        <title>Credit</title>
      </Heading>
      <Sidebar whatPage="credit" />
    </>
  );
};

export default DashboardCreditPage;
