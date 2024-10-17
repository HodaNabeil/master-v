import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNotify } from "@/Hooks";
import { PhoneInput } from "@/Common";

const Login = ({ setActiveTab }) => {


  const [FormData, setFormData] = useState({
    PhoneNumber: "+2",
    Password: ""
  })



  const toast = useNotify();



  const HandleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }



  // Validate form fields
  const validateForm = (FormData) => {
    let errors = [];
    // Phone number validation
    if (!FormData.PhoneNumber) {
      errors.push("Phone number is required")
    } if (FormData.PhoneNumber?.length < 10) {
      errors.push("Phone number is invalid")
    }
    const PassValidate = PasswordRequiredCheck(FormData.Password, true)
    if (PassValidate) {
      errors.push(PassValidate)
    }
    return errors;
  };

  const handleSubmit = async (e, FormData) => {
    try {
      e.preventDefault();
      const errors = validateForm(FormData)
      if (errors.length == 0) {
        const Api = "https://masterp.futuresolutionsdev.com/api/v3/public/auth/login";
        const res = await axios.post(`${Api}`, {
          Password: FormData.Password,
          Method: FormData.PhoneNumber,
          UType: "U",
        });
        toast("success", "You have successfully logged in.", true)
        return;
      }
      toast("error", errors[0], false)
    } catch (error) {
      console.error(error);
      toast("error", "Something went wrong. Please try again.", true)
    }

  };

  return (
    <Box marginTop={"6px"}>
      <form onSubmit={e => handleSubmit(e, FormData)}>
        <PhoneInput
          name={'PhoneNumber'}
          htmlFor={"PhoneNumber"}
          defaultCountry="EG"
          label={'WhatsApp'}
          value={FormData.PhoneNumber}
          onChange={(e) => HandleChange({
            target: {
              name: "PhoneNumber",
              value: e
            }
          })}
        />

        <FormControl>
          <FormLabel color={"white"}>Password</FormLabel>
          <Input
            color={"whiteAlpha.800"}
            type="password"
            autoComplete="current-password"
            name="Password"
            value={FormData.Password || ""}
            onChange={HandleChange}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="whiteAlpha"
          variant="outline"
          color={"white"}
          width={"100%"}
          my="20px"
          letterSpacing={"2px"}
          transition={"0.3s"}
          _hover={{ letterSpacing: "4px" }}
        >
          Submit
        </Button>
      </form>

      <Flex gap={"2px"}>
        <Text color={"whiteAlpha.800"} size={"17px"} fontWeight={"light"}>
          Don&apos;t have an account?
        </Text>

        <Button
          onClick={() => setActiveTab("Register")}
          colorScheme="blue"
          variant="link"
        >
          Sign Up Now
        </Button>
      </Flex>

      <Button
        onClick={() => setActiveTab("Rest")}
        colorScheme="blue"
        variant="link"
      >
        Forget Password
      </Button>
    </Box>
  );
};

export default Login;
