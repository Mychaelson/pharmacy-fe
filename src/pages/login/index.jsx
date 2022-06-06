import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Container
      bgColor="#001B2B"
      //   backgroundColor="#1A5DB4"
      justifyContent="center"
      minW="2xl"
      borderRadius="lg"
      borderWidth="thin"
      shadow="lg"
      p="4"
      my="2"
    >
      <Box>
        <Input borderRadius="xl" bgColor="white" type="text" />
        <Button my="1">Hello</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
