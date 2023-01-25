var boxs = document.querySelectorAll(".box");
var turn =0;
var grid_values =[null,null,null,null,null,null,null,null,null]
for(var i=0; i<boxs.length;i++){
    let x = boxs[i];
    let y = i;
    

    x.addEventListener("click", () => {
        if(turn === 0)
        x.style.backgroundColor ="red";
        else
        x.style.backgroundColor ="blue";

        turn =1-turn;
        grid_values[y] = turn;
        console.log(grid_values);

       

        if(isGameOver()){

        }
    }) 
}
//  isGameOver =()=>{

//  }


