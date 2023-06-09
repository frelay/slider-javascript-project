"use strict";

// Информация об апартаментах
const apartments = [
    {
        id: 1,
        city: "Rostov-on-Don LCD admiral",
        apartmentArea: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request",
        img: "/img/Rostov-on-Don-Admiral.jpg",
    },
    {
        id: 2,
        city: "Sochi <br> Thieves",
        apartmentArea: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request",
        img: "/img/Sochi-Thieves.jpg",
    },
    {
        id: 3,
        city: "Rostov-on-Don Patriotic",
        apartmentArea: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request",
        img: "/img/Rostov-on-Don-Patriotic.jpg",
    },
];

let currentIndex = 0;
const utilClasses = ["admiral", "sochi", "patriotic"];
setApartmentsInfo(currentIndex);

// Получаем элементы
const prevArrow = document.querySelector(".main__prev-arrow");
const nextArrow = document.querySelector(".main__next-arrow");
const linksList = document.querySelector(".main__slider__list");
const sliderSircles = document.querySelector(".main__slider-switcher");

// Функция добавления текста и картинки
function setApartmentsInfo(index) {
    // Получаем элементы для добавления текста и картинки об апартаментах
    const apartmentCity = document.querySelector(".main__appartment-city");
    const apartmentArea = document.querySelector(".main__appartment-area");
    const apartmentRepairTime = document.querySelector(
        ".main__appartment-repair-time"
    );
    const apartmentRepairCost = document.querySelector(
        ".main__appartment-repair-cost"
    );
    const apartmentImg = document.querySelector(".main__slider__img");
    const links = document.querySelectorAll(".main__slider__link");
    const circles = document.querySelectorAll(".main__circle");

    links.forEach((link) => {
        if (link.classList.contains(utilClasses[index])) {
            removeActive("main__slider__link", "active-link");
            link.classList.add("active-link");
        }
    });

    circles.forEach((circle) => {
        if (circle.classList.contains(utilClasses[index])) {
            removeActive("main__circle", "active-circle");
            circle.classList.add("active-circle");
        }
    });

    // Добавляем текст и картинку
    apartmentCity.lastElementChild.innerHTML = `${apartments[index].city}`;
    apartmentArea.lastElementChild.innerHTML = `${apartments[index].apartmentArea}`;
    apartmentRepairTime.lastElementChild.innerHTML = `${apartments[index].repairTime}`;
    apartmentRepairCost.lastElementChild.innerHTML = `${apartments[index].repairCost}`;
    apartmentImg.style = `background-image: url(${apartments[index].img});`;
}

// Функция удаления активности кружков и ссылок
function removeActive(className, activeClass) {
    const allItems = document.querySelectorAll("." + className);

    allItems.forEach((item) => {
        if (item.classList.contains(activeClass)) {
            item.classList.remove(activeClass);
        }
    });
}

// Функция заполняет инфо и картинки по ссылкам и кружкам на которые нажали
function fillInfoByTarget(e) {
    if (e.target.classList.contains(utilClasses[0])) {
        setApartmentsInfo(0);
    } else if (e.target.classList.contains(utilClasses[1])) {
        setApartmentsInfo(1);
    } else if (e.target.classList.contains(utilClasses[2])) {
        setApartmentsInfo(2);
    }
}

// Функция делает активные кружки и ссылки
function setActive(e) {
    const link = "main__slider__link";
    const circle = "main__circle";
    let activeClass;

    if (e.target.classList.contains(link)) {
        activeClass = "active-link";
        removeActive(link, activeClass);
        e.target.classList.add(activeClass);
        fillInfoByTarget(e);
    } else if (e.target.classList.contains(circle)) {
        activeClass = "active-circle";
        removeActive(circle, activeClass);
        e.target.classList.add(activeClass);
        fillInfoByTarget(e);
    }
}

// Обработчики для стрелок
prevArrow.addEventListener("click", () => {
    setApartmentsInfo(currentIndex - 1);
    currentIndex -= 1;
});

nextArrow.addEventListener("click", () => {
    setApartmentsInfo(currentIndex + 1);
    currentIndex += 1;
});

// Обработчик для ссылок
linksList.addEventListener("click", setActive);

// Обработчик для кружочков
sliderSircles.addEventListener("click", setActive);
