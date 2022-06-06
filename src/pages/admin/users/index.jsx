import { Heading } from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";

const DashboardUsersPage = () => {
  return (
    <>
      <Heading>
        <title>Users</title>
      </Heading>
      <Sidebar whatPage="users" />
    </>
  );
};

export default DashboardUsersPage;
