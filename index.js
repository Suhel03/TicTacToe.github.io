var boxs = document.querySelectorAll(".box");
var turn =0;
var grid_values = ["","","","","","","","",""];
var values = [true,true,true,true,true,true,true,true,true];
let isGameActive = true;
var countTurns=0;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxs.forEach(cell => {
    box.addEventListener('click' ,() => {
        var index=cell.getAttribute("id");
        console.log(values[index]);

        if(turn ===0 && values[index])
        {
        box.style.backgroundColor="red";
        values[index]= false;
        grid_values[index]=0;
        console.log(grid_values[index]);
        turn = 1-turn;
        countTurns+=1;
        }
        else if (values[index])
        {
        box.style.backgroundColor="blue";
        values[index]=false;
        grid_values[index]=1;
        console.log(grid_values[index]);
        turn = 1-turn;
        countTurns+=1;
        }
        // console.log(box);
        if(countTurns==9){
            console.log("Sorry ! Game Over :(")
        }
        
    })
});


