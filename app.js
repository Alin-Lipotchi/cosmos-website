// Variables

const img = document.querySelector(".product-card");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

// Slider Function

const slider = async () => {
    let i = 0;
    let n = 3;

    // Planets Fetch

    const response = await fetch("./planets.json");
    let planets = await response.json();
    n = Object.keys(planets).length;

    // Arrows

    const goLeft = (e) => {
        e.preventDefault();
        if (i > 0) {
            i--;
        } else {
            i = n - 1;
        }
        change(i);
    };

    const goRight = (e) => {
        e.preventDefault();
        if (i < n - 1) {
            i++;
        } else {
            i = 0;
        }
        change(i);
    };

    // Event Listeners

    leftArrow.addEventListener("click", goLeft);
    rightArrow.addEventListener("click", goRight);

    // Planet Changer
    const change = (e) => {
        img.children[0].style.background = `url(${
            planets[e + 1].image
        }) no-repeat center center/cover`;
        img.children[0].children[0].innerHTML = `<h3>${planets[
            i + 1
        ].name.toUpperCase()}</h3>
        <p>${planets[i + 1].location}</p>
        <p>Distance: ${planets[i + 1].distance}</p>
        <p>AUPopulation: ${planets[i + 1].aupopulation}</p>`;
        img.children[1].children[0].innerHTML = `${planets[i + 1].name
            .charAt(0)
            .toUpperCase()}<span class="fw-2">${planets[i + 1].name.slice(
            1
        )}</span>`;
        img.children[1].children[1].innerHTML = planets[i + 1].description;
        img.children[1].children[3].children[0].children[0].innerHTML = `${
            planets[i + 1].price
        }&euro;`;
        img.children[1].children[3].children[0].children[1].innerHTML = `${
            planets[i + 1].ticket_type
        }`;
    };
};
slider();

// Hamburger

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#hidden-menu");
let toggle = true;

const toggleMenu = (e) => {
    e.preventDefault();
    if (toggle) {
        menu.style.transform = "translateY(0)";
        toggle = false;
    } else {
        menu.style.transform = "translateY(-125%)";
        toggle = true;
    }
};

hamburger.addEventListener("click", toggleMenu);
