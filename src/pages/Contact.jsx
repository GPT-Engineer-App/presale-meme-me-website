import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Contact Us
        </Heading>
        <Text fontSize="xl" textAlign="center">
          We'd love to hear from you! Reach out to us at support@mememeico.com.
        </Text>
        <Box as="footer" mt={8} textAlign="center" width="100%">
          <Text fontSize="sm" color="gray.500">
            © 2024 Meme Me ICO. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
