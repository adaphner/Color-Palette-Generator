//to initialize background color and display initial hex values
function displayInitialColors() {
    const bgColor = ['#35788C', '#6398AA', '#5E8379', '#79A1C7', '#204666', '#3F6B9B'];
    const hexData = document.querySelectorAll('.hex-number');
    hexData.forEach((el, index) => {
        const initialColor = bgColor[index];
        el.parentElement.style.backgroundColor = initialColor;
        el.innerText = initialColor;
    });
}
displayInitialColors();

// to generate random hex color values
function randomColors() {
    let hex = '#';
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[rand];
    }
    return hex;
}

// to display new hex values when button is clicked
document.getElementById('bg-color-button').addEventListener('click', () => {

    const hexData = document.querySelectorAll('.hex-number');

    hexData.forEach(el => {
        const hexColor = randomColors();
        el.parentElement.style.backgroundColor = hexColor;
        el.innerText = hexColor;
    });
});

// Thank you for visiting my github page.