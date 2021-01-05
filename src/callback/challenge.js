let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhhtp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.resposeText))
            }else{
                const error = new Error('Error'+ url_api);
            }
            return callback(error, null)
        }
    }
    xhttp.send()
}

