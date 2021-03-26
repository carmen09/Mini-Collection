let myPink = document.querySelector(".Pink");
console.log(myPink);
myPink.innerText = "Pink";
myPink.style.color="Pink";
myPink.style.marginTop="100px";
myPink.style.fontSize="100px";

myPink.addEventListener("click", function(){
let newImage = document.createElement("img");
 
newImage.classList.add("new-image");
newImage.src="./art collection/pink.jpeg";
newImage.style.width="300px";
newImage.style.height="300px";
 
document.querySelector(".container").append(newImage);
 
})




let myBlue = document.querySelector(".Blue");
console.log(myBlue);
myBlue.innerText = "Blue ";
myBlue .style.color="#6ADDD6";
myBlue .style.marginTop="100px";
myBlue.style.fontSize="100px";
myBlue.addEventListener("click", function(){
    let newImage = document.createElement("img");
     
    newImage.classList.add("new-image");
    newImage.src="./art collection/blue.jpeg";
    newImage.style.width="300px";
    newImage.style.height="300px";
     
    document.querySelector(".container").append(newImage);
     
    })


   

let myYellow = document.querySelector(".Yellow");
console.log(myYellow);
myYellow.innerText = "Yellow";
myYellow .style.color="#F8E357";
myYellow .style.marginTop="100px";
myYellow.style.fontSize="100px";
myYellow.addEventListener("click", function(){
    let newImage = document.createElement("img");
     
    newImage.classList.add("new-image");
    newImage.src="./art collection/Yellow2.jpeg";
    newImage.style.width="300px";
    newImage.style.height="300px";
     
    document.querySelector(".container").append(newImage);
     
    })


