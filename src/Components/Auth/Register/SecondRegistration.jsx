/* eslint-disable react/prop-types */
import { useNotify } from "@/Hooks";
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";


const SecondRegistration = ({ setActiveStep, setActiveTab, SendFormData, setSendFormData }) => {
  const toast = useNotify();


  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSendFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = (SendFormData) => {
    let errors = [];


    if (SendFormData.UserRoleId === "2") {
      if (!SendFormData.UserCompanyName) {
        errors.push("Company Name is required");
      } else if (SendFormData.UserCompanyName.length < 2) {
        errors.push("Company Name must be at least 2 characters long");
      } else if (!/[A-Za-z]/.test(SendFormData.UserCompanyName)) {
        errors.push("Company Name must contain at least one letter");
      }
    }

    return errors;
  };

  console.log(SendFormData)

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const errors = validateForm(SendFormData);
    if (errors.length === 0) {
      setActiveStep("ThirdRegistration");
    } else {
      toast("error", errors[0], true);
    }
  };

  return (
    <form onSubmit={handleSubmitButton}>
      <FormControl>
        <Text as={"h2"} color={"white"}>Account Type</Text>
        <Select
          color="white"
          bg="#030625"
          name="UserRoleId"
          value={SendFormData.UserRoleId || ""}
          onChange={handleSelectChange}
          _hover={{ bg: "#0f133d" }}
        >
          <option value={1} style={{ background: "#030625" }}>Personal</option>
          <option value={2} style={{ background: "#030625" }}>Company</option>
        </Select>
      </FormControl>

      {SendFormData.UserRoleId === "2" && (
        <Box>
          <FormControl>
            <FormLabel color={"white"}>Company Name</FormLabel>
            <Input
              isInvalid={!SendFormData.UserCompanyName}
              errorBorderColor="white"
              color={"whiteAlpha.800"}
              type="text"
              name="UserCompanyName"
              value={SendFormData.UserCompanyName || ""}
              onChange={handleSelectChange}
            />
          </FormControl>

          <FormControl>
            <Text as={"h2"} color={"white"}>Users Count</Text>
            <Select
              color="white"
              placeholder="Choose"
              name="UserSubUsersCount"
              value={SendFormData.UserSubUsersCount || ""}
              onChange={handleSelectChange}
              bg="#030625"
              _hover={{ bg: "#0f133d" }}
            >
              <option value='1' style={{ background: "#030625" }}>1</option>
              <option value='2' style={{ background: "#030625" }}>2</option>
              <option value='3' style={{ background: "#030625" }}>3</option>
              <option value='4' style={{ background: "#030625" }}>4</option>
              <option value='5' style={{ background: "#030625" }}>5</option>
              <option value='6' style={{ background: "#030625" }}>6</option>
              <option value='7' style={{ background: "#030625" }}>7</option>
              <option value='8' style={{ background: "#030625" }}>8</option>
              <option value='9+' style={{ background: "#030625" }}>9+</option>
            </Select>
          </FormControl>
        </Box>
      )}

      <Flex gap={"20px"} my={"10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Button
          size="md"
          width="100%"
          backgroundColor="transparent"
          style={{ border: "1px solid white " }}
          color="white"
          _hover={{ backgroundColor: "#fffefe2e" }}
          onClick={() => setActiveStep("FirstRegistration")}
        >
          Previous
        </Button>
        <Button
          color="white"
          colorScheme="green"
          width="100%"
          size="md"
          type="submit"
        >
          Next
        </Button>
      </Flex>
    </form>
  );
};

export default SecondRegistration;
