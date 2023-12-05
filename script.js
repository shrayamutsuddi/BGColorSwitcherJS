const btnEl = document.querySelectorAll(".box");
btnEl.forEach((curr, idx) => {
    curr.addEventListener("click", function(){
        const boxColor = [
            "#d4afb9",
            "#d1cfe2",
            "#9cadce",
            "#7ec4cf",
            "#daeaf6"
        ];
        //setting the body's bg color based on the index clicked
        document.body.style.backgroundColor = boxColor[idx];
    });
});