import { useState, useEffect } from "react";
import { Container, VStack, Text, Button, Input, HStack, Box, Heading, Image, useToast } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const [ethPrice, setEthPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(1000);
  const toast = useToast();

  useEffect(() => {
    setEthPrice(2000);
  }, []);

  const handlePurchase = () => {
    if (amount === "" || isNaN(amount)) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount of ETH.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const totalCost = (amount * tokenPrice).toFixed(2);
    toast({
      title: "Purchase Successful",
      description: `You have purchased ${amount} MEME tokens for ${totalCost} USD.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Meme Me ICO Presale
        </Heading>
        <Image src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeXxlbnwwfHx8fDE3MTczNDAwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cryptocurrency" boxSize="200px" />
        <Text fontSize="xl" textAlign="center" mb={4}>
          Join the Meme Me ICO presale and be a part of the next big thing in the crypto world! Total supply: 1,000,000 MEME tokens. Current ETH price: ${ethPrice} USD
        </Text>
        <Box width="100%">
          <HStack spacing={4}>
            <Input placeholder="Amount in ETH" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Button leftIcon={<FaEthereum />} colorScheme="teal" onClick={handlePurchase}>
              Buy MEME
            </Button>
          </HStack>
        </Box>
        <Text fontSize="md" color="gray.500" mt={4}>
          1 ETH = {tokenPrice} MEME tokens
        </Text>
      </VStack>
      <Box as="footer" mt={8} textAlign="center" width="100%">
        <Text fontSize="sm" color="gray.500">
          Contact us: support@mememeico.com
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
