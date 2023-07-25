const request = require ("request")

const forecast = (longtitude , latitude , callback  ) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=1bdcc7e7dcdf41348f2185052230805&q=" + latitude + "," + longtitude
     
    request ({url , json : true} , (error , res) =>{
    
        if(error){
            callback("the web site is not fiend" , undefined)
        }else if(res.body.error){
            callback(res.body.error.message , undefined)
        }else{
            callback ( undefined , res.body.location.name , "  And  " , res.body.current.condition.text +"  And  " + res.body.current.temp_c )
        }
    })
    }
    module.exports = forecast