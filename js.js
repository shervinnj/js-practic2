console.log('1');
console.log('2');

setTimeout(function(){
    console.log('after 4 saniyeh');
},4000)

console.log('3');
console.log('4');
// be system mighim ke key in dastoor baramoon anjam beshe
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++ HTTP request ++++++++++++++++++

// ke bekhayim ye seri etelato az server:

// daryaft (GET)
// ersal (post)
// taghir (PUT)
// hazf (DELETE)

// API : poleh ertebati beyneh 2 system ke bekhan be ham dar ertebat bashan

// Endpoint : Mahaleh vojoodeh manabea

//jasonolace holder web sayte barayeh fake API


const url='https://jsonplaceholder.typicode.com/todos/1';

//URL balah  fake API 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//payin sakhte object request 

let request = new XMLHttpRequest()

// dastooreh balah ba estefadeh az gozineh new ye constructor ijad mikonim

//XMLHttpRequest ye file object requst mikonim 


request.open('GET','data.txt');
// 2 ta argument migireh avali k emikhay etelat az server daryaft koni
// ya bedi ya delete koni ya change koni
// va bad argomaneh 2 vom barayeh eshareh be chizi ke mikhay az server daryaft koni
// ke ma barayeh mesal az file data.txt ke sakhtim az oon etelat daryaft mikonim


request.send();
//va hala ke requst sakhtam hala mikham etelaaat ersal konam konam
//++++++++++++++++++++++++++++++++++

//hala ke etelaato daryaft va send kardam hala ba property  onload miyam be etelatam dastresi peyda mikonam

// request.onload=function(){
//     if(request.status===200){
//         console.log(request);
//     }else{
//         console.log('page NOT found');
//     }


// }
// ba estefadeh az clg ma mitoonim dastresi dashteh bashim be etelatemoon
// ke mohemtarineshoon hast responseText ke asmeh maneh
//va bad status ke agar bezaneh 200 yani hame chi khubeh 
// va bad statusText ke aghar bezaneh ok ke okayeh
// to function bala zamani ke neveshtim aghar status bara bar ba 200 bood ke yani ok peyghame clg baramoon namayesh bedeh
// va agharam nabud clg namayesh bedeeh

//+++++++++ hala ma miyam in kareh ba estefadeh az JSON mikonim
request=new XMLHttpRequest();

request.open('GET','data.json');

request.send();

request.onload=function(){
    if(request.status===200){
        console.log(request.responseText);
        
    }else{
        console.log('NOT Found....');
    }
}

//ba estefadeh az in dastoor ma yek function neveshtim
// ke file jason daaryaft konim va jasonemoon to consollog be soorateh string objet namayesh mideh
//hala agar bekhayim be soorateh arr namayesh bedeh az dastoreh JSON.parse estefadeh mikonim ke dar khateh payin anjamesh midim

request.onload=function(){
    if(request.status===200){
        let data=JSON.parse(request.responseText)
        
        console.log(data[0].firstName);
        
    }else{
        console.log('NOT Found....');
    }

}

//ma yek motaghir ijad kardim va JSON.parse rikhtim toosh
// va hala goftim outcome be soorateh array bara ma namayesh bedeh
//va hata mitoonim beghim kodoom filo ehtiyaj darim










