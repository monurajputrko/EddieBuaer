import navbar from "./nav.js";

let navdiv=document.getElementById("navbar");
navdiv.innerHTML=navbar();

let serchInput=document.getElementById("navser");
serchInput.addEventListener("keypress",searchData);

async function getData(url){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    return data;
}


async function searchData(ele){
try {
   if(ele.key==="Enter"){
    let searchVal=serchInput.value;
    let url=`https://api.github.com/users/${searchVal}`;
 
    let data=await getData(url)

    let profileimg=document.getElementById("profile_img");
    profileimg.src=data.avatar_url;
   }   
}catch(error){
console.log(error);
}
}