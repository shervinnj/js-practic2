// console.log('1');
// console.log('2');

// setTimeout(function(){
//     console.log('after 4 saniyeh');
// },4000)

// console.log('3');
// console.log('4');
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


// const url='https://jsonplaceholder.typicode.com/todos/';

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
// request=new XMLHttpRequest();

// request.open('GET','data.json');

// request.send();

// request.onload=function(){
//     if(request.status===200){
//         console.log(request.responseText);
        
//     }else{
//         console.log('NOT Found....');
//     }
// }

//ba estefadeh az in dastoor ma yek function neveshtim
// ke file jason daaryaft konim va jasonemoon to consollog be soorateh string objet namayesh mideh
//hala agar bekhayim be soorateh arr namayesh bedeh az dastoreh JSON.parse estefadeh mikonim ke dar khateh payin anjamesh midim

// request.onload=function(){
//     if(request.status===200){
//         let data=JSON.parse(request.responseText)
        
//         console.log(data);
        
//     }else{
//         console.log('NOT Found....');
//     }

// }

//ma yek motaghir ijad kardim va JSON.parse rikhtim toosh
// va hala goftim outcome be soorateh array bara ma namayesh bedeh
//va hata mitoonim beghim kodoom filo ehtiyaj darim
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

//barayeh darkhasteh etelaat az server
 
// let ersal=new XMLHttpRequest;
// ersal.open('Get',url);
// ersal.send();
// ersal.onload=function(){
//     if(ersal.status===200){
//         let ers=JSON.parse(ersal.responseText)
//         for(let d of ers){
//             console.log(d);
//         }
//     }else{
//         console.log('not fond');
//     }
// }


// ma ba in dastooreh sadeh mitoonim be url  server dastresi dashte bashim 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const url='https://jsonplaceholder.typicode.com/todos/1';
// let get=function(url,callback){

//     let requst=new XMLHttpRequest();
// requst.open('GET',url);
// requst.send();

// requst.onload=function(){
//     if(requst.status===200){
//         let data=JSON.parse(requst.responseText)
//         callback(undefined,data);
//     }else{
//         callback('not found',undefined);
//     }
// }
// }

// get(url,function(error,data){
//     if(error){
//         console.log('no data');
//     }else{
//         console.log(data);
//     }
// });

// call back function
//dar khat 149 barayeh khateh 133 man perameter dovom ye function neveshtam


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const url1='https://jsonplaceholder.typicode.com/todos/1';
// const url2='https://jsonplaceholder.typicode.com/todos/2';
// const url3='https://jsonplaceholder.typicode.com/todos/3';

// get(url1,function(error,data){
//     if(error){
//         console.log('no data');
//     }else{
//         console.log(data);
//         get(url2,function(error,data){
//     if(error){
//         console.log('no data');
//     }else{
//         console.log(data);
//         get(url3,function(error,data){
//     if(error){
//         console.log('no data');
//     }else{
//         console.log(data);
//     }
// });
//     }
// });
//     }
// });

//++++++++++  call back hell
// hame zireh elsa joda boodan alan hamashoono zireh ham garar dadim ta ontime ejra beshan

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let site='https://jsonplaceholder.typicode.com/todos/1';



// function godFather(site,callback){

//     let gondar=new XMLHttpRequest();
//     gondar.open('GET',site);
//     gondar.send();
//     gondar.onloadend=function(){
//     if(gondar.status===200){
//         let tabdil;
//         tabdil=JSON.parse(gondar.responseText)
//       callback(undefined,tabdil);
        
        
//     }else{
//         callback('not found..',undefined);
//     }
//     }

// }

// godFather(site,function(error,tabdil){
//  if(error){
//      console.log(error);
//  }else{
//      console.log(tabdil);
//  }
// });

// agar bekhayim be chanta server requst bezanim 
// va mikhayim be tartib bashe miyayim dakhele else zireh 
//consoleLog minevesim

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let site='https://jsonplaceholder.typicode.com/todos/1';



// function godFather(site){
   
//     return new Promise(function(resolve,reject){

//     let gondar=new XMLHttpRequest();
//     gondar.open('GET',site);
//     gondar.send();
//     gondar.onloadend=function(){
//     if(gondar.status===200){
//         let tabdil;
//         tabdil=JSON.parse(gondar.responseText)
//       resolve(tabdil);
         
//     }else{
//         reject('not found...');
//     }
//  }

  
//  });

//  }
  
//  godFather(site).then(function(tabdil){
//      console.log(tabdil);
//  }).catch(function(error){
//      console.log(error);
//  })

 // promisis function++++++++++++++++++++
//   site='https://jsonplaceholder.typicode.com/todos/1';


// fetch(site).then(function(data){
//     if(data.status===200){
//         return data.json()
//     }else{
//         throw new Error('not found')
//     }
    
// }).then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error.message);
// })


// kheli asooneh site ke url mirizim to fatch 
// bad mighim return kon to data bad ye function result minevisim 
// bad mighim printesh kon so zatan then hame ro zangirehvar mikoneh


// hala agar mikhayim fitch error bedeh bayad az dastooreh if estefadeh konim

// let link='https://jsonplaceholder.typicode.com/todos/2';


// let getTodos=async function(link){
//     let response = fetch(link);
//    if(response.status===200){
//       let data=await response.json();
//       return data;
//    }else{
//         throw new Error('not found....')
//    }
// }

// getTodos(link).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error.message);
// })

//============ tozih nadarad=======================









