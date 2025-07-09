public with sharing class WeatherApiController {

    public class WeatherWrapper{
        public String name;
        public Main main;
        public List<Weather> weather;

        public class Main{
            public Decimal temp;
            public Integer humidity;
        }

        public class Weather{
            public String description;
        }
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,Object> getWeatherDetails(String city) {
        String api='56dd0ceca2158ff118de13582bc283c0';
        String url='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+api;

        Http http= new Http();
        HttpRequest request=new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        request.setHeader('Content-Type', 'application/json');

        HttpResponse response=http.send(request);

        if(response.getStatusCode()==200){
            return (WeatherWrapper) JSON.deserialize(response.getBody(),WeatherWrapper.class);

        }else{
            throw new CalloutException(response.getStatus());
        }

        
    }
}