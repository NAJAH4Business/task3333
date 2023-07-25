const request = require ("request")

const geocode = (address , callback) =>{
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibmFqYWg1IiwiYSI6ImNsaGlwenlwOTA0MHkzcm94M3E3bmVmajgifQ._YC2gzPMBQBQZZzN-BtQ3Q'
    
    request ({url : geocodeUrl , json : true} , (error , res)=>{
        if(error){
            callback("no server ERROR" , undefined)
        }
        else if (res.body.message){
            callback(res.body.message , undefined)
        }
        
        else if(res.body.features.length == 0){
            callback("no features ERROR" , undefined)
        }else{
            callback(undefined , {
                 longtitude : res.body.features[0].center[0],
                 latitude : res.body.features[0].center[1]
            })
    
        }
    })
    } 
    module.exports = geocode