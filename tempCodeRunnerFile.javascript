const colors = [  "red",  "blue",  "green",  "yellow",  "orange",  "purple",  "pink",  "brown",  "black",  "white",];

function randomColorsArray(arr){
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled;
}
let shuffled = randomColorsArray(colors);
let shuffledForcol= randomColorsArray(colors);

for(let i =0 ;i<shuffled.length;i++){
            if(shuffled[i] === shuffledForcol[i]){
                console.log("retry");

            }else{
                console.log(shuffled);
                console.log(shuffledForcol);
            }

}