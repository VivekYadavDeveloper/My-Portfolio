
//**  ======================================
// ****Creating A Responsive Nav Bar Component"
//**  ====================================== 

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const HeaderElem = document.querySelector(".Header");
mobile_nav.addEventListener(`click`, () => { HeaderElem.classList.toggle(`active`) })



//**  ======================================
// ****Creating  Portfolio Tabbed Component"
//**  ======================================



const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);


    // **? Removing The Hover Effect For The Current Element.

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    //**? After That We Are Adding Class By Clicking */


    p_btn_clicked.classList.add("p-btn-active");

    // **? To Find The Number in Data Attribute


    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);


    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});



//**  ======================================
// **** SCROLL TO TOP BUTTON USING Js ONLY WITH ANY HTML.
//**  ====================================== 

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);
const scrollTop = () => { heroSection.scrollIntoView({ behavior: "smooth" },) };
scrollElement.addEventListener("click", scrollTop);



//**  ====================================== 
// **** Animated Number Counter
//**  ====================================== 


const counterNum = document.querySelectorAll(".counter-numbers");

// ****? SPEED OF COUNTER


const speed = 200;

// ****? SETTING RANG "curElem Is Parameter Here"


counterNum.forEach((curElem) => {
    // ****? Creating A Function For getting Data.


    const updateNumber = () => {
        const tragetNumber = parseInt(curElem.dataset.number);
        // console.log(tragetNumber);

        const initialNum = parseInt(curElem.innerText);
        // console.log(intialNum);

        const incrementNumber = Math.trunc(tragetNumber / speed);
        console.log(incrementNumber);


        // ? If MY Initial Number Is "SMALLER" Then TargateNumber.


        if (initialNum < tragetNumber) {

            // ! The Parameter "cur Elem" and "innerText" Is = "initialNum + incrementNumber"
            curElem.innerText = `${initialNum + incrementNumber}+`;

            setTimeout(updateNumber, 5);
        }

    };
    updateNumber();

});
