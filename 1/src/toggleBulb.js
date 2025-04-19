import {changeBackgroundColor, changeBackgroundFilter, getElement, isNullOrUndefined} from './helper.js';

export const toggle = () => {
    const imageElement = getElement(`#bulbImage`);
    const inputElement = getElement(`#toggleBulb`);
    const brightnessSlider = getElement(`#brightnessRange`);
    const brightnessSliderWrapper = brightnessSlider.parentElement;

    if(isNullOrUndefined(imageElement) || isNullOrUndefined(inputElement) || isNullOrUndefined(brightnessSliderWrapper)){
        alert("Please reload the page once, HTML elements are missing...");
        window.location.reload();
    }

    brightnessSliderWrapper.style.display = "none";

    inputElement.addEventListener("change", (e) => {
        e.preventDefault();
        const isChecked = inputElement.checked;

        if(isChecked){
            imageElement.classList.add("zoom");
            imageElement.src = `./src/assets/lightOnBulbPng.png`;
            changeBackgroundColor(`#fff`);
            brightnessSliderWrapper.style.display = "block";
        } else {
            imageElement.classList.remove("zoom");
            imageElement.src = `./src/assets/whiteBulb.png`;
            changeBackgroundColor(`#1c1c2e`);
            brightnessSliderWrapper.style.display = "none";

            imageElement.style.filter = `brightness(1)`;
            changeBackgroundFilter(`brightness(1)`);

            brightnessSlider.value = "1";
        }
    });

    brightnessSlider.addEventListener("input", (e) => {
        const brightnessValue = e.target.value;
        imageElement.style.filter = `brightness(${brightnessValue})`;
        changeBackgroundFilter(`brightness(${brightnessValue})`);
    });
};