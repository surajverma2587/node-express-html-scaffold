const BASE_URL = "http://localhost:3000";

const onReady = async () => {
  const response = await fetch(`${BASE_URL}/api/bye`);

  const data = await response.json();

  console.log(data);
};

$(document).ready(onReady);
