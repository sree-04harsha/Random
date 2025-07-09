import { LightningElement } from 'lwc';
import getWeatherDetails  from '@salesforce/apex/WeatherApiController.getWeatherDetails';

export default class WeatherApiProject extends LightningElement {

    city='';
    cityName='';
    data='';
    error='';
    currentWeather='';
    humidity='';
    temp='';
    changeHandler(event){
        this.city=event.target.value; 
    }

    
    
    getWeather(){
       getWeatherDetails({city:this.city})
        .then(result=>{this.data=result;this.error=undefined;
            console.log(this.data);
            this.cityName=this.data.name;
            this.temp=this.data.main.temp;
            this.humidity=this.data.main.humidity;
            this.currentWeather=this.data.weather[0].description;
            //console.log(this.currentWeather);
            //console.log(this.temp);
           //console.log(this.humidity);
            //console.log(this.cityName);
        })
        .catch(error=>{this.error=error.message;this.data=undefined;console.log(this.error);});
        
    }
      
}