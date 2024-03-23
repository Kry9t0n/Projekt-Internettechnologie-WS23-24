var editRoute;
var sliderMin;
var sliderMax;
var sliderStepWidth;
var desc;
var value;

var slider = document.getElementById("rangeSlider");
var sliderContainer = document.getElementById("slider");
var label = document.getElementById("formLabel");


function enableParamInput(editFunction){
    var id = editFunction.getAttribute("id");
    var sliderForm = document.getElementById("sliderForm");

    switch(id){
        case "brightness":
            sliderForm.setAttribute("action", "/brightness");

            value = 0; //Startwert
            sliderMin = -1;
            sliderMax = 1;
            sliderStepWidth = 0.2;
            desc = "Helligkeit zwischen -1 und 1 wählen";
            break;
        case "contrast":
            sliderForm.setAttribute("action", "/contrast");

            value = 0;
            sliderMin = -1;
            sliderMax = 1;
            sliderStepWidth = 0.2;
            desc = "Kontrastwerte zwischen -1 und 1 wählen";
            break;
        case "blur":
            sliderForm.setAttribute("action", "/blur");


            break;
        case "opacity":
            sliderForm.setAttribute("action", "/opacity");

            value = 0;
            sliderStepWidth = 0.1;
            sliderMin = 0;
            sliderMax = 1;
            desc = "Verblassung zwischen 0 und 1 wählen"
            break;
        case "flip":
            sliderForm.setAttribute("action", "/flip");

            break;
        case "rotate":
            sliderForm.setAttribute("action", "/rotate");

            value = 0;
            sliderMin = -360;
            sliderMax = 360;
            sliderStepWidth = 45;
            desc = "Gradanzahl zur Drehung festlegen";
            break;
    }

    // setze die Eigenschaften des Sliders
    slider.setAttribute("value", value);
    slider.setAttribute("min", sliderMin);
    slider.setAttribute("max", sliderMax);
    slider.setAttribute("step", sliderStepWidth);

    label.setAttribute("value", desc);

    // Form sichtbar machen
    sliderContainer.setAttribute("class", "");

}

function updateSliderValueDiv(){
    var slider = document.getElementById("rangeSlider");
    var rangeValDiv = document.getElementById("rangeValue");
    var value = slider.value;

    rangeValDiv.textContent = value;
}

function selectSliderFormActionDestination(navBarElem){
    var id = navBarElem.getAttribute("id");
    var sliderForm = document.getElementById("sliderForm");

    switch(id){
        case "blur":
            sliderForm.setAttribute("action", "/blur");
            break;
    }
}