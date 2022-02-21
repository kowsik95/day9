const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
        let data=JSON.parse(request.responseText);
        let Population=data.reduce((acc,element)=>{
            return acc+element.population;
        },0)
        console.log(Population);       
}