const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function setTheme(theme) {

    document.body.classList.remove(
        "light-theme",
        "dark-theme",
        "purple-theme"
    );

    document.body.classList.add(theme + "-theme");
}
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (
        "0123456789+-*/.".includes(key)
    ) {
        appendToDisplay(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

});
function sqrt() {
    display.value = Math.sqrt(display.value);
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}