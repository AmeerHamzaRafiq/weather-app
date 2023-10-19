const input = document.querySelector(".inputBox");
const result = document.querySelector(".result");
const button = document.getElementById("button");
const form = document.querySelector(".form");




const currentDate = new Date();
// console.log(currentDate);
const monthsAlphabetic = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// console.log(monthsAlphabetic);
const years = [
  "2021", "2022", "2023", "2024","2025", "2026",
  "2027", "2028", "2029", "2030", "2031", "2032"
];
console.log(years);

const date = currentDate.getDate();
const month = monthsAlphabetic[currentDate.getMonth()];
const year = years[currentDate.getFullYear() - 2021]; 
const localTime = ` ${month}, ${date}, ${year}`;



form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = input.value;

  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=b439b5fdb55a4bd0ba740105231710&q=${city}`
    )
    
    .then((response) => {
      console.log(response.data);
      const item = response.data;
      result.innerHTML = `
          <div class="result-div"> 
          <h1 class="country">${item.location.country}</h1>
          <h5 class="City">${item.location.name}</h5>
          <h2 class="LocalTime"><span class="Temperature-font">${localTime}</span></h2>
          <h2 class="temp_c">C:<span class="Temperature-font"> ${item.current.temp_c}°</span></h2>
          <h2 class="temp_f">f:<span class="Temperature-font"> ${item.current.temp_f}°</span></h2>
         <img class="img" src="${item.current.condition.icon}" alt="Weather Icon">
         <h2 class="Pressure" >Pressure:<span class="Temperature-font"> ${item.current.pressure_mb}</span> mb</h2>
         <h2 class="Wind">Wind: <span class="Temperature-font">${item.current.wind_kph}</span> km/h</h2>
        </div>`;
        console.log(response);
    })
    .catch((err) => {
      console.log(err);
      alert("Data not found");
    });
});
