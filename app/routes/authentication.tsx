import {
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  HStack,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import "react-phone-input-2/lib/style.css";

export default function Index() {
  return (
    <Flex
      className="container"
      h="100%"
      flexDirection="column"
      alignItems="center"
      bg="gray.50"
    >
      <Flex
        h="24%"
        mb={["4", "2"]}
        color="primary.500"
        flexDirection={["column", "row", "row"]}
        justifyContent={["flex-end"]}
        alignItems={["center", "flex-end", "flex-end"]}
      >
        <Heading
          mr="2"
          fontWeight="light"
          fontSize={["36px", "48px"]}
          mb={["-3", "0"]}
        >
          welcome to
        </Heading>
        <Heading fontSize={["40px", "48px"]}>paygroup</Heading>
      </Flex>

      <Flex
        w={["100%", null, "65%", "30%", "33%", "24%"]}
        flex={1}
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          color="gray.600"
          fontSize={["3xl", "4xl"]}
          fontWeight="light"
          mb="10"
        >
          log in to your account
        </Heading>

        <Flex w="100%" flexDirection="column" px={["4", "0"]}>
          <FormControl>
            <Input
              type="email"
              placeholder="email"
              bg="white"
              size="lg"
              borderTopLeftRadius={10}
              borderTopRightRadius={10}
              borderBottomLeftRadius={0}
              borderBottomRightRadius={0}
              borderBottomWidth={0}
              _focus={{
                borderBottomWidth: 1,
              }}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              placeholder="password"
              bg="white"
              size="lg"
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            />
          </FormControl>

          <HStack
            my={["10", null, null, "6"]}
            justifyContent="space-between"
            mx="1"
          >
            <Checkbox defaultChecked>remember me</Checkbox>
            <Box color="blue.500">
              <Link to="">forgot password</Link>
            </Box>
          </HStack>

          <Button colorScheme="primary" size="lg" borderRadius={10}>
            sign in
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

/**
 * return (
    <Flex
      className="container"
      h="100%"
      flexDirection="column"
      bg="gray.100"
      css={`
        .slide {
          height: 90%;
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <Slide in direction="top" className="slide">
        <Center
          flex={1}
          className="center"
          display="flex"
          flexDirection="column"
        >
          <Heading fontSize="4xl" color="gray.600" fontWeight="light" mb="4">
            welcome to <Text color="primary.500">paygroup</Text>
          </Heading>

          <Panel
            h={["80%"]}
            w={["90%", null, "75%", "50%"]}
            flexDirection="row"
          >
            <Box
              flex={{ base: 0, md: 1, lg: 1 }}
              bg="indigo.50"
              borderRadius={10}
            >
              <SvgLogin height="100%" width="100%" />
            </Box>

            <Flex
              flex={1}
              flexDirection="column"
              borderLeftWidth={[0, null, 1]}
              borderLeftColor="gray.300"
              marginLeft={["0", null, "4"]}
              paddingLeft={["0", null, "4"]}
              alignItems={["center", "center", "flex-start"]}
            >
              <Heading fontSize="4xl" color="gray.600" fontWeight="light">
                login into your account
              </Heading>
              <PhoneInput
                country={"us"}
                // value={this.state.phone}
                // onChange={(phone) => this.setState({ phone })}
              />
            </Flex>
          </Panel>
        </Center>
      </Slide>
    </Flex>
  );
 */
