var editRoute;
var sliderMin;
var sliderMax;
var sliderStepWidth;
var desc;

var slider = document.getElementById("rangeSlider");
var sliderContainer = document.getElementById("slider");
var label = document.getElementById("formLabel");

function enableParamInput(editFunction){
    var id = editFunction.getAttribute("id");
    switch(id){
        case "brightness":
            editRoute = "/brightness";
            sliderMin = -1;
            sliderMax = 1;
            sliderStepWidth = 0.2;
            desc = "Helligkeit zwischen -1 und 1 wählen";
            break;
        case "contrast":
            break;
    }

    // setze die Eigenschaften des Sliders
    slider.setAttribute("min", sliderMin);
    slider.setAttribute("max", sliderMax);
    slider.setAttribute("step", sliderStepWidth);

    label.setAttribute("value", desc);

    // Form sichtbar machen
    sliderContainer.setAttribute("class", "");

}

function getEditFunctionParams(){

}

