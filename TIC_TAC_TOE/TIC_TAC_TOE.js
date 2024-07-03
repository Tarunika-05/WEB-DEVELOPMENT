
let btns=document.querySelectorAll("#disp button");
;
let truex=true;
let rst=document.querySelector('#reset');
let newg=document.querySelector("#newgame");
let count=0;
let flag=0;
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
btns.forEach((btn)=>{
    
    btn.addEventListener("click",()=>{
        if(truex==true){
            btn.innerText="X";
            truex=false;
        
        }
        else{
            btn.innerText="O";
            truex=true;
        }
        btn.disabled=true;
        
        win.forEach((pos)=>{
            let posx=btns[pos[0]].innerText;
            let posy=btns[pos[1]].innerText;
            let posz=btns[pos[2]].innerText;
            if(posx!="" && posy!="" && posz!=""){
                if(posx==posy && posy==posz){
                    let msg=document.querySelector("#winner");
                    rst.style.display="none";
                    msg.innerText=`${posx} WON !`;
                    newg.style.display="block";
                    msg.style.display="block";
                    btns.forEach((btn)=>{
                        btn.disabled=true;

                    })
                    flag=1;


                }

            }
               
        })
        count++;
        
        if(count===9 & flag===0){
            let msg=document.querySelector("#winner");
            msg.innerText=`DRAW`;
            newg.style.display="block";
            msg.style.display="block";
        }
        
        
        
        

        
    });
});



let rbt=rst.querySelector("button");
rbt.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.disabled=false;
        btn.innerText="";
    })
    count=0;
});

newg.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.disabled=false;

    })
    rst.style.display="block";
    newg.style.display="none"
    let msg=document.querySelector("#winner");
    msg.style.display="none";
    count=0;
    flag=0;
    

})

