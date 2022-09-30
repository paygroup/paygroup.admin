import {
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  HStack,
  Checkbox,
  Box,
  chakra,
} from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { Link, useTransition, Form } from "@remix-run/react";

const EnhancedForm = chakra(Form);

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("usrpassword");
  return null;
};

export default function Index() {
  const { state } = useTransition();

  return (
    <EnhancedForm
      h="100%"
      bg="gray.50"
      display="flex"
      alignItems="center"
      className="container"
      flexDirection="column"
      method="post"
      action="/authenticate"
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
              bg="white"
              size="lg"
              type="email"
              name="email"
              placeholder="email"
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
              bg="white"
              size="lg"
              name="usrpassword"
              type="password"
              placeholder="password"
              autoComplete="new-password"
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

          <Button
            colorScheme="primary"
            size="lg"
            type="submit"
            borderRadius={10}
            isLoading={state === "submitting"}
            loadingText="logging in"
          >
            sign in
          </Button>
        </Flex>
      </Flex>
    </EnhancedForm>
  );
}
