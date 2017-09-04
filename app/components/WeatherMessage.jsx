var React=require('react');



var WeatherMessage = ({temp,location}) =>  {
  return(
    <h3>Its a {temp} in {location}.</h3>
  )
};
module.exports=WeatherMessage;