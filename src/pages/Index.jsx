import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Main Headline: Financial Markets Today</Heading>
        <Text fontSize="lg">Stay updated with the latest trends and insights in the financial world.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="start">
        <Heading size="lg">Featured Articles</Heading>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="1" p={4} bg="white" boxShadow="md">
            <Image src="https://via.placeholder.com/300" alt="Article 1" mb={4} />
            <Heading size="md" mb={2}>Article 1</Heading>
            <Text>Summary of the first featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
          <Box flex="1" p={4} bg="white" boxShadow="md">
            <Image src="https://via.placeholder.com/300" alt="Article 2" mb={4} />
            <Heading size="md" mb={2}>Article 2</Heading>
            <Text>Summary of the second featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
          <Box flex="1" p={4} bg="white" boxShadow="md">
            <Image src="https://via.placeholder.com/300" alt="Article 3" mb={4} />
            <Heading size="md" mb={2}>Article 3</Heading>
            <Text>Summary of the third featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
        </Flex>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={10}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
            <Link href="#" color="white">Contact Us</Link>
          </HStack>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;