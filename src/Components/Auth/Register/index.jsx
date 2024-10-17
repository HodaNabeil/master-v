

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import FirstRegistration from "./FirstRegistration";
import SecondRegistration from "./SecondRegistration";
import ThirdRegistration from "./ThirdRegistration";
import { cloneElement, useState } from "react";

import "./Register.css"

// eslint-disable-next-line react/prop-types
const Register = ({ setActiveTab }) => {
  const [ActiveStep, setActiveStep] = useState("FirstRegistration")
  // eslint-disable-next-line no-unused-vars
  const [SendFormData, setSendFormData] = useState({

    // 1
    UserName: "",
    UserEmail: "",
    UserPhoneNumber: "",
    UserPassword: "",


    // 2
    UserRoleId: 1,
    UserCompanyName: "",
    UserSubUsersCount: '',
    plan: "",
    sections: "",
    cities: ""
  })







  const RegisterSteps = {
    FirstRegistration: <FirstRegistration setActiveStep={setActiveStep}
      SendFormData={SendFormData} setSendFormData={setSendFormData}

    />,




    SecondRegistration: <SecondRegistration setActiveStep={setActiveStep} setActiveTab={setActiveTab}

      SendFormData={SendFormData} setSendFormData={setSendFormData}


    />,






    ThirdRegistration: <ThirdRegistration setActiveStep={setActiveStep} />
  }












  return (
    <Box className="container-register">

      {
        cloneElement(RegisterSteps[ActiveStep], setActiveStep)
      }

      <Flex gap={"10px"} alignItems={"center"} mt={"10px"}>

        <Text color={"whiteAlpha.700"} textTransform={"capitalize"}>
          have Account?
        </Text>

        <Button onClick={() => setActiveTab("Login")} colorScheme="blue" color={"blue.300"}
          variant="link">Login</Button>
      </Flex>

    </Box>
  );
};

export default Register;
