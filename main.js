var allNumber =[];
var randomMaxMin ;
var randomMaxMin2 ;
var numberLimit = Math.ceil(Math.random() * Math.pow(10, 10)) + 1;
console.log("numberLimit = " + numberLimit);
var numberMain = Math.ceil(Math.random() * numberLimit) ;
numberMainCheker();
function numberMainCheker() {
    console.log("numberLimit = "+ numberLimit +" numberMain = " + numberMain)
if (numberMain == numberLimit){
    numberMain = Math.ceil(Math.random() * numberLimit) ;
    numberMainCheker(); 
}
if (numberMain > numberLimit ) {
    console.log("Erorr numberMain > numberLimit ")
    return;
}
}

for (let i = 0; randomMaxMin2 == randomMaxMin; i++ , numberLimit = Math.min(...allNumber) ) {
    randomMaxMin = Math.floor(Math.random() * (numberLimit - numberMain) ) + numberMain ;
    if (randomMaxMin2 == randomMaxMin){break}
    randomMaxMin2 = randomMaxMin ; 
    allNumber.push(randomMaxMin) ;    
}
console.log(allNumber) ;

function salam(){
        var funcnumber = document.getElementById('inp').value;
for (let C = 0; C < allNumber.length; C++) {
    if (funcnumber == allNumber[C]){
        console.log("yes");
        console.log(C)
        break;
    }else{
        console.log("NO")
    }
}}