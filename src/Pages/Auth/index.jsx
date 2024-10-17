import { Login, Register } from "@/Components";
import { Box, Image, Text } from "@chakra-ui/react";
import { cloneElement, useState } from "react";
const Tabs = {
  Login: <Login />,
  Register: <Register />,
};
const AuthPage = () => {
  // Login , Register, Reset
  const [ActiveTab, setActiveTab] = useState("Login");

  return (
    <Box
      position={"relative"}
      bg={"#1a202c"}
      w={"100%"}
      h="100vh"
      overflow={"hidden"}
    >
      <Image
        h={"100vh"}
        w={"100%"}
        src={"/Img/master-auth-img.jpeg"}
        position="fixed"
        left="0"
        top="-7px"
        objectFit="cover"
        alt="login"
      />

      <Box
        position={"absolute"}

        top={ActiveTab === "Register" ? "28%" : "35%"}
        right={"50px"}
        bg={"transparent"}
        w={"350px"}
        p={"20px"}
        boxShadow={" 0 0 5px 5px #18ccfd7d"}
        borderRadius={"2px"}
      >
        <Text
          as="h5"
          textAlign={"center"}
          color={"white"}
          p="10px"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          SignIn
        </Text>

        {cloneElement(Tabs[ActiveTab], {
          setActiveTab,
        })}
      </Box>
    </Box>
  );
};

export default AuthPage;
