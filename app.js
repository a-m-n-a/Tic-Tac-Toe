let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


let turnO = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
//winPatterns is a 2D array i.e an array of arrays
//if i access index 0 i.e winPatterns[0] = [0,1,2]
//winPatterns[2]= [0,4,8]
//winPatterns[0][1]=1
//winPatterns[1][0]=0

const showWinner = (winner)=>{
   msg.innerText = `Congratulations! Winner is player ${winner}`;
   msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    let pos1Val;
    let pos2Val;
    let pos3Val;

    for(let pattern of winPatterns)
        {
            pos1Val=boxes[pattern[0]].innerText;
            pos2Val=boxes[pattern[1]].innerText;
            pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val !="")
                {
                    if(pos1Val === pos2Val && pos2Val=== pos3Val)
                        {
                             showWinner(pos1Val);
                             disableBoxes();
                        }
                }
        }
        if(clicksCount===9)
            {
                Draw();
            }
        
}

const Draw=()=>{
    msg.innerText = "The match was draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let clicksCount = 0;

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO)
    {
        box.style.color ="black";
        box.innerText="O";
        turnO=false;
    }
    else{
        box.style.color ="brown";
        box.innerText="X";
        turnO=true; 
    }
    box.disabled = true;
    clicksCount++;
    checkWinner();
  })
})

let disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled = true;
        }
}

let enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const resetGame=()=>{
    clicksCount = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetButton.addEventListener("click",resetGame);

newGameBtn.addEventListener("click",resetGame);