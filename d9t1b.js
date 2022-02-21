const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let data=JSON.parse(request.responseText);
    let population=data.filter((x)=>{
        return x.population<200000;
        })
    console.log(population);
}