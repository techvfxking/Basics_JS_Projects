import {changeBackgroundColor, getElement, isNullOrUndefined} from './helper.js';

export const toggle = () => {
    const imageElement = getElement(`#bulbImage`);
    const inputElement = getElement(`#toggleBulb`);

    if(isNullOrUndefined(imageElement) || isNullOrUndefined(inputElement)){
        alert("Please reload the page once, HTML elements are missing...");
        window.location.reload();
    }

    inputElement.addEventListener("change",(e) => {
        e.preventDefault();
        const isChecked = inputElement.checked;
        
        if(isChecked){
            imageElement.classList.add("zoom");
            imageElement.src = `./src/assets/lightOnBulbPng.png`;
            changeBackgroundColor(`#fff`);
        }else{
            imageElement.classList.remove("zoom");
            imageElement.src = `./src/assets/whiteBulb.png`;
            changeBackgroundColor(`#1c1c2e`);
        }
    })
}