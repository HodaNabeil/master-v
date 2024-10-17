// eslint-disable-next-line react/prop-types, no-unused-vars
const ThirdRegistration = ({ setActiveStep }) => {








  const handleSubmit = async (e) => {

    try {

      e.preventDefault();
      const Api = "https://masterp.futuresolutionsdev.com/api/v3/public/auth/register"
      const res = await axios.post(Api, SendFormData);
      console.log(res.data);
    } catch (error) {
      console.error("Registration failed:", error);

    }
  };
  return <div>ThirdRegistration</div>;
};

export default ThirdRegistration;
