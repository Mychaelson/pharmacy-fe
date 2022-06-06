import { Avatar, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { FiHome, FiUsers, FiDollarSign, FiBox } from "react-icons/fi";

const Sidebar = ({ whatPage = "home" }) => {
  return (
    <Flex
      w={["100%", "100%", "10%", "15%", "15%"]}
      flexDir="column"
      alignItems="center"
      bgColor="#001B2B"
      color="slategray"
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        h={["100vh", null, "100vh"]}
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
            bgGradient="linear(to-r, #BA1B2A, #2B8EE2)"
            _hover={{
              bgGradient: "linear(to-l, #003585, #FEBA02)",
              cursor: "none",
            }}
            bgClip="text"
          >
            Rise.
          </Heading>
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="sidebar-items">
              <Link
                display={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
                href="/admin/home"
              >
                <Icon
                  display={["none", "none", "none", "flex", "flex"]}
                  as={FiHome}
                  fontSize="2xl"
                  className={whatPage == "home" ? "active-icon" : null}
                />
              </Link>
              <Link href="/admin/home" _hover={{ textDecor: "none" }}>
                <Text className={whatPage == "home" ? "active" : null}>
                  Home
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/admin/users">
                <Icon
                  as={FiUsers}
                  fontSize="2xl"
                  className={whatPage == "users" ? "active-icon" : null}
                />
              </Link>
              <Link _hover={{ textDecor: "none" }} href="/admin/users">
                <Text className={whatPage == "users" ? "active" : null}>
                  Users
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon
                  as={FiDollarSign}
                  fontSize="2xl"
                  className={whatPage == "wallet" ? "active-icon" : null}
                />
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text className={whatPage == "wallet" ? "active" : null}>
                  Wallet
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/admin/products">
                <Icon
                  as={FiBox}
                  fontSize="2xl"
                  className={whatPage == "products" ? "active-icon" : null}
                />
              </Link>
              <Link _hover={{ textDecor: "none" }} href="/admin/products">
                <Text className={whatPage == "products" ? "active" : null}>
                  Products
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={10} mt={5}>
          <Avatar src="wahyu.jpg" my={2} />
          <Text textAlign="center">Wahyu Octa</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
