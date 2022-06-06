import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FiDollarSign,
  FiSearch,
  FiBell,
  FiCreditCard,
  FiPlus,
} from "react-icons/fi";

const CreditCard = () => {
  const [value, setValue] = useState(1);

  return (
    <Flex
      w={["100%", "100%", "35%"]}
      minW={[null, null, "300px", "300px", "400px"]}
      bgColor="gray.100"
      p="3%"
      flexDir="column"
      overflow="auto"
    >
      <Flex alignContent="center">
        <InputGroup
          bgColor="white"
          mb={4}
          border="none"
          borderColor="white"
          borderRadius="10px"
          mr={2}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray" />}
          />
          <Input type="number" placeholder="Search" borderRadius="10px" />
          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="white"
            borderRadius="50%"
            p="10px"
          />
          <Flex
            w={30}
            h={25}
            bgColor="red"
            color="white"
            borderRadius="50%"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Flex>
        </InputGroup>
      </Flex>
      <Heading letterSpacing="tight">My Cards</Heading>
      {value == 1 && (
        <Box
          borderRadius="25px"
          mt={4}
          w="100%"
          h="200px"
          bgGradient="linear(to-t, #B57295, #29259A)"
        >
          <Flex
            p="1em"
            color="white"
            flexDir="column"
            h="100%"
            justify="space-between"
          >
            <Flex justify="space-between" align="flex-start" w="100%">
              <Flex flexDir="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $5,750.02
                </Text>
              </Flex>
              <Flex align="center">
                <Icon mr={2} as={FiCreditCard} />
                <Text>Rise.</Text>
              </Flex>
            </Flex>
            <Text mb={4}>**** **** **** 1289</Text>
            <Flex align="flex-end" justify="space-between">
              <Flex>
                <Flex flexDir="column" mr={4}>
                  <Text textTransform="uppercase" fontSize="xs">
                    Valid Thru
                  </Text>
                  <Text fontSize="lg">12/23</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text textTransform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
            </Flex>
          </Flex>
        </Box>
      )}
      {value == 2 && (
        <Box
          borderRadius="25px"
          mt={4}
          w="100%"
          h="200px"
          bgGradient="linear(to-t, yellow.300, blue.500)"
        >
          <Flex
            p="1em"
            color="white"
            flexDir="column"
            h="100%"
            justify="space-between"
          >
            <Flex justify="space-between" align="flex-start" w="100%">
              <Flex flexDir="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $10,991.00
                </Text>
              </Flex>
              <Flex align="center">
                <Icon mr={2} as={FiCreditCard} />
                <Text>Rise.</Text>
              </Flex>
            </Flex>
            <Text mb={4}>**** **** **** 5672</Text>
            <Flex align="flex-end" justify="space-between">
              <Flex>
                <Flex flexDir="column" mr={4}>
                  <Text textTransform="uppercase" fontSize="xs">
                    Valid Thru
                  </Text>
                  <Text fontSize="lg">12/23</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text textTransform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
            </Flex>
          </Flex>
        </Box>
      )}
      {value == 3 && (
        <Box
          borderRadius="25px"
          mt={4}
          w="100%"
          h="200px"
          bgGradient="linear(to-t, red, #29259A)"
        >
          <Flex
            p="1em"
            color="white"
            flexDir="column"
            h="100%"
            justify="space-between"
          >
            <Flex justify="space-between" align="flex-start" w="100%">
              <Flex flexDir="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $15,750.02
                </Text>
              </Flex>
              <Flex align="center">
                <Icon mr={2} as={FiCreditCard} />
                <Text>Rise.</Text>
              </Flex>
            </Flex>
            <Text mb={4}>**** **** **** 7787</Text>
            <Flex align="flex-end" justify="space-between">
              <Flex>
                <Flex flexDir="column" mr={4}>
                  <Text textTransform="uppercase" fontSize="xs">
                    Valid Thru
                  </Text>
                  <Text fontSize="lg">12/23</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text textTransform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>
              <Icon as={FiCreditCard} />
            </Flex>
          </Flex>
        </Box>
      )}
      <Flex justifyContent="center" mt={2}>
        <Button
          bgColor={value == 1 ? "gray.600" : "gray.400"}
          onClick={() => setValue(1)}
          size="xs"
          mx={1}
        />
        <Button
          bgColor={value == 2 ? "gray.600" : "gray.400"}
          onClick={() => setValue(2)}
          size="xs"
          mx={1}
        />
        <Button
          bgColor={value == 3 ? "gray.600" : "gray.400"}
          onClick={() => setValue(3)}
          size="xs"
          mx={1}
        />
      </Flex>
      <Flex flexDir="column" my={4}>
        <Flex justify="space-between" mb={4}>
          <Text>Balance</Text>
          <Text fontWeight="bold">$142.39</Text>
        </Flex>
        <Flex justify="space-between" mb={4}>
          <Text>Credit Limit</Text>
          <Text fontWeight="bold">$150.00</Text>
        </Flex>
      </Flex>
      <Heading>Send money to</Heading>
      <Flex>
        <AvatarGroup size="md" max={3}>
          <Avatar src="https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png" />
          <Avatar src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png" />
          <Avatar src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" />
          <Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />
          <Avatar src="https://pickaface.net/gallery/avatar/20140330_144132_1871_pickaface.png" />
        </AvatarGroup>
        <Avatar icon={<FiPlus />} ml={2} color="white" bgColor="gray.300" />
      </Flex>
      <Text color="gray" mt={10} mb={2}>
        Card Number
      </Text>
      <InputGroup>
        <InputLeftElement
          pointerEvent="none"
          color="gray.700"
          children={<FiCreditCard />}
        />
        <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
      </InputGroup>
      <Text color="gray" mt={10} mb={2}>
        Sum
      </Text>
      <InputGroup>
        <InputLeftElement
          pointerEvent="none"
          color="gray.700"
          children={<FiDollarSign />}
        />
        <Input type="number" placeholder="130.00" />
      </InputGroup>
      <Button
        mt={4}
        bgColor="blackAlpha.900"
        color="white"
        p={7}
        borderRadius={15}
      >
        Send Money
      </Button>
    </Flex>
  );
};

export default CreditCard;
