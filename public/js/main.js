// const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name =  document.getElementById('city_name');
const citynamee= document.getElementById('citynamee');
const temp = document.getElementById('temp');


const getinfo = async (event)  =>{
   event.preventDefault();
   // const cityval = cityname.Value;
   let cityvalue= citynamee.value;

   if (cityvalue=== ""){
      city_name.innerText = `plzz fill the bar!`;
   
   }else{
      try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue} &units=metric&appid=43de332d4dbea73674b6aa3d0b2a18ed`
       const responce = await fetch(url);
       const data = await responce.json();
       const arrData = [data];
      //  console.log(arrData);

       city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

       temp.innerText = arrData[0].main.temp;
   // return  temp.innerText = arrData[0].main.temp;${arrData[0].main.temp}

   //     function sck(){
   //        return city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
   //  }
   //   console.log(sck());

      }catch{
         city_name.innerText = `plzz entre the city name properly`;
      }
   }
}

submitbtn.addEventListener('click', getinfo);