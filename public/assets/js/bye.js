// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://radiant-meadow-12715.herokuapp.com";

const onReady = async () => {
  const response = await fetch(`${BASE_URL}/api/bye`);

  const data = await response.json();

  console.log(data);
};

$(document).ready(onReady);
