import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import "react-phone-number-input/style.css";
import { PhoneInput } from "@/Common";
import { useNotify } from "@/Hooks";


const FirstRegistration = ({ setActiveStep, SendFormData, setSendFormData }) => {
  const toast = useNotify();

  const validateForm = (SendFormData) => {
    let errors = [];


    // User Name validation 
    if (!SendFormData.UserName) {
      errors.push("User Name is required");
    } else if (SendFormData.UserName.length < 1) {
      errors.push("User Name must be at least 1 character long");
    } else if (!/[A-Za-z]/.test(SendFormData.UserName)) {
      errors.push("User Name Request and write at least one letter ");
    }


    // Email validation
    if (!SendFormData.UserEmail) {
      errors.push("User Email is required");
    } else if (!/\S+@\S+\.\S+/.test(SendFormData.UserEmail)) {
      errors.push("User Email is invalid");
    }

    // Phone Number validation
    if (!SendFormData.UserPhoneNumber) {
      errors.push("Phone Number is required");
    } else if (SendFormData.UserPhoneNumber.length < 10) {
      errors.push("Phone Number is invalid");
    }

    // Password validation
    if (!SendFormData.UserPassword) {
      errors.push("Password is required");
    } else if (SendFormData.UserPassword.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }

    return errors;
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setSendFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const errors = validateForm(SendFormData);
    if (errors.length === 0) {
      setActiveStep("SecondRegistration");
    } else {
      toast("error", errors[0], true);
    }
  };

  console.log(SendFormData)

  return (
    <form onSubmit={handleSubmitButton}>
      <FormControl>
        <FormLabel color="white" textTransform="capitalize">
          User Name
        </FormLabel>
        <Input
          isInvalid={!!SendFormData.UserName && SendFormData.UserName.length < 1}
          errorBorderColor="white"
          color="whiteAlpha.800"
          type="text"
          name="UserName"
          value={SendFormData.UserName}
          onChange={HandleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel color="white" textTransform="capitalize">
          Email Address
        </FormLabel>
        <Input
          isInvalid={!!SendFormData.UserEmail && !/\S+@\S+\.\S+/.test(SendFormData.UserEmail)}
          errorBorderColor="white"
          color="whiteAlpha.800"
          type="email"
          name="UserEmail"
          value={SendFormData.UserEmail}
          onChange={HandleChange}
        />
      </FormControl>

      <FormControl>
        <PhoneInput
          name="UserPhoneNumber"
          label="WhatsApp"
          value={SendFormData.UserPhoneNumber}
          onChange={(e) => HandleChange({
            target: {
              name: "UserPhoneNumber",
              value: e
            }
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel color="white" textTransform="capitalize">
          Password
        </FormLabel>
        <Input
          isInvalid={!!SendFormData.UserPassword && SendFormData.UserPassword.length < 6}
          errorBorderColor="white"
          color="whiteAlpha.800"
          type="password"
          name="UserPassword"
          value={SendFormData.UserPassword}
          onChange={HandleChange}
        />
      </FormControl>
      <Button
        type="submit"
        textTransform="capitalize"
        width="100%"
        color="white"
        letterSpacing="2px"
        fontWeight="500"
        transition="0.3s"
        bg={
          SendFormData.UserName &&
            /[A-Za-z]/.test(SendFormData.UserName) &&
            SendFormData.UserName.length >= 1 &&
            SendFormData.UserEmail &&
            /\S+@\S+\.\S+/.test(SendFormData.UserEmail) &&
            SendFormData.UserPassword &&
            SendFormData.UserPassword.length >= 6
            ? "green.600"
            : "red.900"
        }
        _hover={{
          bg:
            SendFormData.UserName &&
              /[A-Za-z]/.test(SendFormData.UserName) &&
              SendFormData.UserName.length >= 1 &&
              SendFormData.UserEmail &&
              /\S+@\S+\.\S+/.test(SendFormData.UserEmail) &&
              SendFormData.UserPassword &&
              SendFormData.UserPassword.length >= 6
              ? "green.400"
              : "red.800"
        }}
      >
        Next
      </Button>



    </form >
  );
};

export default FirstRegistration;
