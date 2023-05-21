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
setApartmentsInfo(currentIndex);

// Получаем элементы
const prevArrow = document.querySelector(".main__prev-arrow");
const nextArrow = document.querySelector(".main__next-arrow");

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

    // Добавляем текст и картинку
    apartmentCity.lastElementChild.innerHTML = `${apartments[index].city}`;
    apartmentArea.lastElementChild.innerHTML = `${apartments[index].apartmentArea}`;
    apartmentRepairTime.lastElementChild.innerHTML = `${apartments[index].repairTime}`;
    apartmentRepairCost.lastElementChild.innerHTML = `${apartments[index].repairCost}`;
    apartmentImg.style = `background-image: url(${apartments[index].img});`;
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
