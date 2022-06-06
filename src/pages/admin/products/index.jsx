import { Heading } from "@chakra-ui/react";
import {} from "@mui/material";
import Sidebar from "../../../components/Sidebar";

const DashboardProductsPage = () => {
  return (
    <>
      <Heading>
        <title>Products</title>
      </Heading>
      <Sidebar whatPage="products" />
    </>
  );
};

export default DashboardProductsPage;
