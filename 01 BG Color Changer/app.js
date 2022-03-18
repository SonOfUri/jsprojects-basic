let colorArr = ["blue", "red", "green"," yellow", "orange","purple", "black",  "blueviolet", "royalblue", "burlywood", "firebrick", "rosybrown", "wheat", ];
const btn = document.querySelector('.info-box-btn');
const layout = document.querySelector('.container');
let title = document.querySelector(".info-box-text");



btn.addEventListener('click' , function(e){
//     layout.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 30)`;

    let rN = randomGenerator();

    function randomGenerator(){
    return Math.floor(Math.random() * colorArr.length * 1);
}

    layout.style.backgroundColor = colorArr[rN];
    btn.style.backgroundColor = colorArr[rN];

 
    title.textContent = `Background Color: ${colorArr[rN]}`;

});