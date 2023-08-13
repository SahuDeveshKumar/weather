const searchbtn=document.querySelector('.search_cont button')
const searchtxt=document.getElementById('cityname')
const city=document.querySelector('.city')
const tmp=document.querySelector('.temp')
const wind=document.querySelector('.wind_val')
const humidity=document.querySelector('.humidity_val')
const tempImg=document.querySelector('.tempimg')
const err=document.querySelector('.err')


const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apikey='&APPID=3813f1c3145061c5128b5319052d3146'


async function getWeather(txt){

   const response=await fetch(apiurl+txt+apikey)
   
   if(response.status==404){
      err.style.display='block'
      document.querySelector('.details_cont').style.display='none'
      return;
   }
   const data=await response.json()
   // console.log(data)
   

   if(data.weather[0].main=='Clouds'){
      tempImg.src ='./images/clouds.png'
   }
   else if(data.weather[0].main=='Clear'){
      tempImg.src ='./images/clear.png'
   }
   else if(data.weather[0].main=='Rain'){
      tempImg.src ='./images/rain.png'
   }
   else if(data.weather[0].main=='Drizzle'){
      tempImg.src ='./images/drizzle.png'
   }
   else{
      tempImg.src ='./images/mist.png'
   }
   city.innerHTML=data.name
   tmp.innerHTML=Math.round(data.main.temp)+'°c'
   wind.innerHTML=data.wind.speed+'km/hr'
   humidity.innerHTML=data.main.humidity+'%'
   document.querySelector('.details_cont').style.display='block'
   err.style.display='none'

}
searchbtn.addEventListener('click',()=> getWeather(searchtxt.value))


