const axios = require("axios");
const { PORT } = require("../config/constants");

async function signUpExample() {
  try {
    const response = await axios.post(`http://localhost:${PORT}/signup`, {
      // NOTE: If you run this example more than once
      // you will have to change this email (emails must be unique)
      email: "testwithaxios@test.com",
      password: "testwithaxios1234",
      name: "testwithaxios"
    });
    console.log("RESPONSE FROM SERVER", response.data);
  } catch (error) {
    console.error("OH NO AN ERROR", error.message);
    console.error("WHAT HAPPENED?", error.response.data);
  }
}

signUpExample();
