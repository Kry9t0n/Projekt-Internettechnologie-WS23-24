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
        case "opacity":
            sliderForm.setAttribute("action", "/opacity");

            value = 0;
            sliderStepWidth = 0.1;
            sliderMin = 0;
            sliderMax = 1;
            desc = "Verblassung zwischen 0 und 1 wählen"
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

function enableInputField(editFunction){ //wird durch Klick auf Blur oder Rotate aufgerufen
    var id = editFunction.getAttribute("id");
    var inputFieldContainer = document.getElementById("inputField");
    var inputFieldForm = document.getElementById("inputFieldForm");
    var inputFieldLabel = document.getElementById("inputFieldLabel");

    var action;
    var labelDesc;

    switch(id){
        case "blur":
            action = "/blur";
            labelDesc = "Anzahl der Pixel für den Blur-Effekt wählen (nur positive Werte erlaubt)";
            break;
        case "rotate":
            action = "/rotate";
            labelDesc = "Wert zwischen -360 und 360 Grad wählen"
            break;
    }

    inputFieldLabel.textContent = labelDesc;
    inputFieldForm.setAttribute("action", action);
    inputFieldContainer.setAttribute("class", "");
}

function enableSelectField(){ //wird durch Klick auf Flip-Option aufgerufen
    document.getElementById("selectField").setAttribute("class", ""); //Form sichtbar machen
}

function updateSliderValueDiv(){
    var slider = document.getElementById("rangeSlider");
    var rangeValDiv = document.getElementById("rangeValue");
    var value = slider.value;

    rangeValDiv.textContent = value;
}

function hideSlider(){
    sliderContainer.setAttribute("class", "collapse"); //slider verstecken

    //mögliche alte werte zurücksetzten
    slider.setAttribute("min", "");
    slider.setAttribute("max", "");
    slider.setAttribute("step", "");
    slider.setAttribute("value", "");

    //wert im anzeigefeld löschen
    document.getElementById("rangeValue").textContent = "";

    //URL in "action"-Attribut des HTML Formulars löschen
    document.getElementById("sliderForm").action = "";
}

function hideInputField(){
    //Inputfeld verstecken
    document.getElementById("inputField").setAttribute("class", "collapse");

    //Inhalt des Labels löschen
    document.getElementById("inputFieldLabel").textContent = "";

    //Wert des Inputfelds löschen
    document.getElementById("numberInputField").value = "";

    //URL in "action"-Attribut des HTML Formulars löschen
    document.getElementById("inputFieldForm").action = "";
}

function hideSelect(){
    //Select verstecken
    document.getElementById("selectField").setAttribute("class", "collapse");

    //Select wieder in Ausgangszustand bringen
    document.getElementById("horVerSelect").selectedIndex = 0;
}