import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      {showNavbar ? (
        <Box mb="3" w="100%" position="fixed" p="2" bgColor="#001B2B">
          <Flex justifyContent="end">
            <Button _hover={{ bgColor: "green" }} colorScheme="orange" mr="2">
              Back
            </Button>
            <Button _hover={{ bgColor: "green" }} colorScheme="orange">
              Forward
            </Button>
          </Flex>
          <Box>
            <Center>
              <ChevronUpIcon
                boxSize="7"
                position="fixed"
                _hover={{ color: "orange", cursor: "pointer" }}
                onClick={() => setShowNavbar(false)}
              />
            </Center>
          </Box>
        </Box>
      ) : (
        <Box w="100%" mb="3" position="fixed" p="2" bgColor="#001B2B">
          <Center>
            <ChevronDownIcon
              boxSize="7"
              position="fixed"
              _hover={{ color: "orange", cursor: "pointer" }}
              onClick={() => setShowNavbar(true)}
            />
          </Center>
        </Box>
      )}
    </>
  );
};

export default Navbar;
