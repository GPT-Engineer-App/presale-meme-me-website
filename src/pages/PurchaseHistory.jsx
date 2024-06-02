import { Container, VStack, Heading, Text } from "@chakra-ui/react";

const PurchaseHistory = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Purchase History
        </Heading>
        <Text fontSize="xl" textAlign="center">
          No purchases made yet.
        </Text>
      </VStack>
    </Container>
  );
};

export default PurchaseHistory;
