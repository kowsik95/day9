const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let data=JSON.parse(request.responseText);
    data.forEach((x)=>{
        console.log(x.name);
        console.log(x.capital);
        console.log(x.flag);
    })
}