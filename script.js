const $cell = document.querySelectorAll("td");
const $buttonReset = document.querySelector(".reset");
let forNow = "&#215;";
let step = 0;

$cell.forEach(cell => {
    $buttonReset.addEventListener("click", function(){
        cell.innerHTML = "";
        forNow = "&#215;";
        step = 0;
    })
    cell.addEventListener("click", function(){    
    if(cell.innerHTML == ""){
        if(forNow == "&#215;"){
            cell.innerHTML = "&#215;";
            forNow = "&#9675;";
        }else {
            cell.innerHTML = "&#9675;";
            forNow = "&#215;";
        }
    }
    step += 1;
    whoWin();
    draw();
    })
})
function whoWin(){
    if($cell[0].innerHTML == "×" && $cell[1].innerHTML == "×" && $cell[2].innerHTML == "×" ||
       $cell[3].innerHTML == "×" && $cell[4].innerHTML == "×" && $cell[5].innerHTML == "×" ||
       $cell[6].innerHTML == "×" && $cell[7].innerHTML == "×" && $cell[8].innerHTML == "×" ||
       $cell[0].innerHTML == "×" && $cell[3].innerHTML == "×" && $cell[6].innerHTML == "×" ||
       $cell[1].innerHTML == "×" && $cell[4].innerHTML == "×" && $cell[7].innerHTML == "×" ||
       $cell[2].innerHTML == "×" && $cell[5].innerHTML == "×" && $cell[8].innerHTML == "×" ||
       $cell[0].innerHTML == "×" && $cell[4].innerHTML == "×" && $cell[8].innerHTML == "×" ||
       $cell[2].innerHTML == "×" && $cell[4].innerHTML == "×" && $cell[6].innerHTML == "×"){
        setTimeout(() => {
            alert("Крестик выиграл!")
        },100)
    }else if($cell[0].innerHTML == "○" && $cell[1].innerHTML == "○" && $cell[2].innerHTML == "○" ||
             $cell[3].innerHTML == "○" && $cell[4].innerHTML == "○" && $cell[5].innerHTML == "○" ||
             $cell[6].innerHTML == "○" && $cell[7].innerHTML == "○" && $cell[8].innerHTML == "○" ||
             $cell[0].innerHTML == "○" && $cell[3].innerHTML == "○" && $cell[6].innerHTML == "○" ||
             $cell[1].innerHTML == "○" && $cell[4].innerHTML == "○" && $cell[7].innerHTML == "○" ||
             $cell[2].innerHTML == "○" && $cell[5].innerHTML == "○" && $cell[8].innerHTML == "○" ||
             $cell[0].innerHTML == "○" && $cell[4].innerHTML == "○" && $cell[8].innerHTML == "○" ||
             $cell[2].innerHTML == "○" && $cell[4].innerHTML == "○" && $cell[6].innerHTML == "○"){
                setTimeout(() => {
                    alert("Нолик выиграл!")
                },100)
             }
};
function draw(){
    if(step == 9){
        setTimeout(() => {
            alert("Ничья!")
        },100)
    }
}