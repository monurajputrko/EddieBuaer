import navbar from "./nav.js";

let navdiv=document.getElementById("navbar");
navdiv.innerHTML=navbar();

let serchInput=document.getElementById("navser");
serchInput.addEventListener("keypress",searchData);

async function getData(url){
    let res=await fetch(url);
    let data=await res.json();
    // console.log(data);
    return data;
}
// async function getDat(url1){
//     let repo=await fetch(url1);
//     let dat=await repo.json();
//     console.log(dat);
//     return dat;
// }


async function searchData(e){
try {
   if(e.key==="Enter"){
    let searchVal=serchInput.value;
    let url=`https://api.github.com/users/${searchVal}`;
 
    let data=await getData(url)

    let profileimg=document.getElementById("profile_img");
    profileimg.src=data.avatar_url;

    let repolink=document.getElementById("rlink");
    repolink.href=data.repos_url;


    // displayproduct();

    // function displayproduct(){
    //   document.querySelector("#userData").textContent="";
    
    //     //   var h4=document.createElement("h4");
    //     //   h4.setAttribute("id", "namerepo")
    //     //   h4.textContent=data.name;
    //     //   console.log(h4);  
    //     var h4=document.createElement("a");
    //       h4.setAttribute("id", "namerepo")
    //       h4.textContent=data.repos_url;   
    
    //       document.querySelector("#userData").append(h4);
    //   }
   }   
}catch(error){
console.log(error);
}
}

// async function searchData(e){
//     try {
//        if(e.key==="Enter"){
//         let searchVal=serchInput.value;
//         let url1=`https://api.github.com/users/${searchVal}/repos`;
     
//         let data=await getDat(url1)

      

//     }
// }catch(error){
//     console.log(error);
//     }
    
// }

