var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();

request.onload=function (){
    var data=JSON.parse(request.responseText);
    const Asia=data.filter((x)=>{
        if(x.region==='Asia'){
            return x.name;
        }
    })
    console.log(Asia);
}