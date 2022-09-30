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
import { useAuthenticate } from "~/features/authenticate";

export default function Index() {
  const { fields, authenticating, onSubmit } = useAuthenticate();

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
              value={fields.email.value}
              onChange={(e) => fields.email.onChange(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="password"
              bg="white"
              size="lg"
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
              value={fields.password.value}
              onChange={(e) => fields.password.onChange(e.target.value)}
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

          <Button
            colorScheme="primary"
            size="lg"
            borderRadius={10}
            onClick={onSubmit}
            isLoading={authenticating}
            loadingText="logging in"
          >
            sign in
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
