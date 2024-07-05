let buttons=document.querySelectorAll("#buttons div");
let win1=document.querySelector("#winner1");
let win2=document.querySelector("#winner2");
let win3=document.querySelector("#winner3");
let usercount=document.querySelector("#ycount");
let compcount=document.querySelector("#ccount");
let user=0;
let comp=0;
function findWinner(){
    let compch=Math.floor(Math.random()*3);
    return compch;
}




buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let id=btn.getAttribute("id");
        let arr=["rock","paper","scis"];
        let compch=arr[findWinner()];
        
        if(id==compch){
         
            win1.style.display="none";
            win2.style.display="none";
            win3.style.display="block";


        }
        else if(id=="rock"){
            if(compch=="paper"){
                let msg=document.querySelector("#winner2");
                msg.innerText="Paper beats Rock. Computer Wins (;-;)";
                win1.style.display="none";
                win3.style.display="none";
                win2.style.display="block";
                comp++;
                compcount.innerText=comp;


            }
            else{
                let msg=document.querySelector("#winner1");
                msg.innerText="Rock beats Scissors. YOU WIN! :D";
                win2.style.display="none";
                win3.style.display="none";
                win1.style.display="block";
                user++;
                usercount.innerText=user;

            }
        }
        else if(id=="paper"){
            if(compch=="rock"){
                let msg=document.querySelector("#winner1");
                msg.innerText="Paper beats Rock. YOU WIN! :D";
                win2.style.display="none";
                win3.style.display="none";
                win1.style.display="block";
                user++;
                usercount.innerText=user;

            }
            else{
                let msg=document.querySelector("#winner2");
                msg.innerText="Scissors beats Paper. Computer Wins (;-;)";
                win1.style.display="none";
                win3.style.display="none";
                win2.style.display="block";
                comp++;
                compcount.innerText=comp;

            }
        }
        else if(id=="scis"){
            if(compch=="rock"){
                let msg=document.querySelector("#winner2");
                msg.innerText="Rock beats Scissor. Computer Wins (;-;)";
                win1.style.display="none";
                win3.style.display="none";
                win2.style.display="block";
                comp++;
                console.log(comp,user);
                compcount.innerText=comp;
            }
            else{
                let msg=document.querySelector("#winner1");
                msg.innerText="Scissors beats paper. YOU WIN! :D";
                win2.style.display="none";
                win3.style.display="none";
                win1.style.display="block";
                user++;
                usercount.innerText=user;
                
            }
        }

    })
})

let rst=document.querySelector("#reset button");
rst.addEventListener("click",()=>{
    usercount.innerText="0";
    compcount.innerText="0";
    win1.style.display="none";
    win3.style.display="none";
    win2.style.display="none";
    user=0;
    comp=0;
})