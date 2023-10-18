

const input = document.querySelector(".inputBox");
const result = document.querySelector(".result");
const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  const city = input.value;

  axios
    .get(`http://api.weatherapi.com/v1/current.json?key=b439b5fdb55a4bd0ba740105231710&q=${city}`)
    .then((response) => {
      console.log(response.data);
      const item = response.data; 
      result.innerHTML = `
     
        <h1>City: ${item.location.name}</h1>
         <h2>cloud: ${item.current.cloud}</h2>
         <h2>Temperature (°C): ${item.current.temp_c}</h2>
         <img src="${item.current.condition.icon}" alt="Weather Icon">
         <h2>Pressure: ${item.current.pressure_mb} mb</h2>
         <h2> wind: ${item.current. wind_kph} km/h</h2>
         <h2>localtime: ${item.location .localtime} </h2>
         <h2>country: ${item.location.country} </h2>
       
      `
    })
    .catch((err) => {
      console.log(err);
      alert("Data not found");
    });
});


