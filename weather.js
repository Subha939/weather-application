


const input = document.querySelector(".search-box input");
const button = document.querySelector("button");

const locationtxt= document.querySelector("para2");

// async function getlocation (location) {
//     const {lat,log,name} = await getlocation(location);

//     const response=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
//     const data= await response.json();
//     const result=data.results[0];
//     console.log(result);

//     return {
//         name:result.name,
//         lat:result.latitude,
//         log:result.longitute
//     }
// }

// async function getWeather(location) {
//     const response= await fetch(`https://api.open-meteo.com/v1/forecast?${lat}&${log}.41&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
//     const data = await response.json();
//     locationtxt.innerText=name;

// };

// input.addEventListener ("click", () => {
//     getWeather(input.value );

// })

// getWeather();
 


 const  getLocation = async(location) => {
   

   let response= await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`)
    let data= await response.json();
    let results = data.results[0];
     console.log(results);
     return {
         locationName: results.name,
         lat:results.latitude,
         lon:results.longitude

     }
 }


const getweather = async (location) =>{

  const {locationName,lat,lon} =  await getLocation(location);
   console.log(locationName);

  let res = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code`);
  let data= await res.json();
   console.log(data);
  
return {
  locationName,

  current:data.current

}

}

button.addEventListener("click", async (evt) => {
  evt.preventDefault();
    // location = input.value;
  const weather = await getweather(input.value);
  const {temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code} = weather.current;
  
  let temp=document.querySelector(".para1");
  temp.innerText = temperature_2m+"°C";

  let city = document.querySelector(".para2");
  city.innerHTML= weather.locationName;
  let humidity = document.querySelector(".hum1");
  humidity.innerHTML=relative_humidity_2m;
  let windSpeed= document.querySelector(".win1");
  windSpeed.innerHTML=wind_speed_10m;
  console.log(weather_code)
  const img= document.querySelector(".forcast img");

  if (weather_code===0){

    img.src="clear.jpg"

   }
  else if (weather_code===2) {
      img.src="mist.jpg"

  }
    else if (weather_code===3) {
     img.src= "clouds.jpg";

  }
  
   else if (weather_code===51) {
      img.src="drizzle.jpg"

   }
   else if (weather_code===53) {
      img.src="drizzle.jpg"

   }
   else if (weather_code===55) {
      img.src="drizzle.jpg"

   }
   else if (weather_code===61) {
      img.src="rain.png"

   }
   else if (weather_code===63) {
      img.src="rain.png"

   }
   else if (weather_code===65) {
      img.src="rain.png"

   }
   else if (weather_code===80) {
      img.src="rain.png"

   }
   else if (weather_code===81) {
      img.src="rain.png"

   }
   else if (weather_code===82) {
      img.src="rain.png"

   }

    else if (weather_code===71) {
      img.src="snow.png"

   }
   else if (weather_code===73) {
      img.src="snow.png"

   }
   else if (weather_code===75) {
      img.src="snow.png"

   }
   else if (weather_code===77) {
      img.src="snow.png"

   }

  
})