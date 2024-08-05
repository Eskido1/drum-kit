// get the drum
const myDrums = document.querySelectorAll(".drum");
console.log(myDrums);
// to get the drum one after the other
// const drum1= myDrums[0];
// const drum1= myDrums[1];
// const drum1= myDrums[2];
// const drum1= myDrums[3];
// const drum1= myDrums[4];
// const drum1= myDrums[5];
// const drum1= myDrums[6];
// to get all the drums in a single line of code use the for loop
for (var i = 0; i < myDrums.length; i++) {
    var drum = myDrums[i];
    // mouse click
    drum.addEventListener("click", function () {
       console.log(this.innerHTML);
       this.style.color="green"

       var drumClicked = this.innerHTML
       makeSound(drumClicked)
       animateBtn(drumClicked);

})
}
// keyboard press

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    console.log(e.key)
    animateBtn(e.key);
})
// sound

function makeSound(key) {
    switch (key) {
        case "W":
            var audio = new Audio ("sounds/tom-1.mp3")
            audio.play()
            break;
            case "A":
                var audio = new Audio ("sounds/tom-2.mp3")
            audio.play()
                
                break;
                case "S":
            var audio = new Audio ("sounds/tom-3.mp3")
            audio.play()
    
            break;
            case "D":
            var audio = new Audio ("sounds/tom-4.mp3")
            audio.play()
    
            break;
            case "J":
            var audio = new Audio ("sounds/snare.mp3")
            audio.play()
    
            break;
            case "K":
            var audio = new Audio ("sounds/kick-bass.mp3")
            audio.play()
            
            break;
            case "I":
            var audio = new Audio ("sounds/crash.mp3")
            audio.play()
            
            break;
    
        default:
            var audio = new Audio ("key not available")
            audio.play()
            break;
}
}
function animateBtn(Key) {
    const btnKey = document.querySelector("." +  Key);
    console.log(btnKey)
    btnKey.classList.add("pressed");
    
    setTimeout(function () {
        btnKey.classList.remove("pressed");
        
    }, 100);
    
}

