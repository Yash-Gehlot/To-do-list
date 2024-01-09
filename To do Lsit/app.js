let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelector("li")


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="X";

    item.appendChild(dltbtn)
    ul.append(item)
    input.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem= event.target.parentElement;
        listitem.remove();
    }
     
})


