const request = new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all',true)
request.send();

request.onload = function() {
        let data = JSON.parse(request.responseText);
        data.filter((x)=>{x.currencies})
        data.filter((x)=>{x.currencies.USD})
        data.map((x)=>{
            console.log(x.name.official);
        })
       
    }