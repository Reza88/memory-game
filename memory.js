function easy(){
    const easy = document.getElementById("btn-easy");
    const reset = document.getElementById("game-reset");

    easy.onclick = function(evt){
        const ctr = document.querySelector(".container"); 
        const ctrBtns = ctr.querySelectorAll("button");
        ctrBtns.forEach(btn => btn.style.visibility = "hidden");
        for(let i = 1; i <= 4; i++){
            const sq = document.createElement("div");
            sq.id = `sq-${i}`;
            sq.className = "square";
            ctr.appendChild(sq);
        }
    }

    reset.onclick = function(evt){
        const ctr = document.querySelector(".container");
        const squares = document.querySelectorAll(".square");
        const ctrBtns = ctr.querySelectorAll("button");
        squares.forEach(sq => sq.style.visibility="hidden");
        ctrBtns.forEach(btn => btn.style.visibility="visible")
    }
}

easy();

