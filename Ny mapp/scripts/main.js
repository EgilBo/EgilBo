
const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lp_image.jpeg') {
        myImage.setAttribute ('src', 'images/lp_image (1).jpeg');
    } else{
        myImage.setAttribute('src','images/lp_image.jpeg');
    }
}
let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
    localStorage.setItem('name', myName);
        myHeading.textContent = `Jag älskar dig ${myName}`;

    }

 
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    const storedName =localStorage.getItem('name');
    myHeading.textContent = `Jag älskar dig ${storedName}`
}
myButton.onclick = () => {
    setUserName ();
}