// 1. Для каждого объекта в массиве infoCards создать карточку с двумя р (value, description) и добавить все карточки в div.info_cards_container

const infoCards = [
    {
        id: 1,
        value: '10',
        description: 'УМК по различным направлениям по робототехнике'
    },
    {
        id: 2,
        value: '20',
        description: 'Школ, в которых запущена робототехника'
    },
    {
        id: 3,
        value: '100',
        description: 'Педагогов, прошедших курсы повышения квалификации'
    },
    {
        id: 4,
        value: '10 000',
        description: 'Обученных детей на базе собственных центров'
    }
]

const infoCardsContainer = document.querySelector('.info_cards_container');
infoCards.forEach(({value, description}) => {
    const cardElem = document.createElement('div');
    const valueElem = document.createElement('p');
    const descriptionElem = document.createElement('p');

    valueElem.innerText = value;
    descriptionElem.innerText = description;

    cardElem.append(valueElem, descriptionElem);
    infoCardsContainer.append(cardElem);

})





// 2. Для каждого объекта в массиве benefitsCards создать карточку с двумя р (benefit, description) и добавить все карточки в div.benefits_cards_container

const benefitsCards = [
    {
        id: 1,
        benefit: 'Удостоверение',
        description: 'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
        info_btn: false
    },
    {
        id: 2,
        benefit: 'Знания',
        description: 'По основам разработки учебно-методических комплексов по робототехнике и программированию',
        info_btn: false
    },
    {
        id: 3,
        benefit: 'Практику',
        description: 'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',
        info_btn: true
    }
]

const benefitsCardsContainer = document.querySelector('.benefits_cards_container');

benefitsCards.forEach(({benefit, description}) => {
    const cardElem = document.createElement('div');
    const benefitElem = document.createElement('p');
    const descriptionElem = document.createElement('p');

    benefitElem.innerText = benefit;
    descriptionElem.innerText = description;

    cardElem.append(benefitElem, descriptionElem);
    benefitsCardsContainer.append(cardElem);
})



// 3. При клике на иконку menu элементу nav добавлять класс menu_active.
// При клике на крестик элементу nav удалять класс menu_active.

const navMenu = document.querySelector('.main_header nav');
const burgerMenuBtn = document.querySelector('.header_icons .fa-bars');
const closeMenuBtn = document.querySelector('.main_header nav .fa-xmark');

burgerMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('menu_active');
});

closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('menu_active');
});



// 4. В div.teachers_cards_container отрисовать карточки преподавателей на основе массива teacherCards

// 5. В div.teacher_modal_content добавить параграф с произвольным текстом и span с текстом закрыть

const teacherModalContent = document.querySelector('.teacher_modal_content');

const moreElem = document.createElement('p');
const closeElem = document.createElement('span');

moreElem.innerText = 'Тут должен быть текст';
closeElem.innerText = 'Закрыть';

teacherModalContent.append(moreElem, closeElem);


// 6. При клике на кнопку "подробнее" у div.teacher_modal добавлять класс modal_active. При клике на кнопку "закрыть" - удалять класс modal_active у div.teacher_modal

const teacherCards = [
    {
        id: 1,
        avatar: './media/t1.jpg',
        first_name: 'Ирина',
        last_name: 'Лайм',
        position: 'преподаватель по робототехнике'
    },
    {
        id: 2,
        avatar: './media/t2.jpg',
        first_name: 'Марина',
        last_name: 'Орлова',
        position: 'преподаватель по робототехнике'
    },
    {
        id: 3,
        avatar: './media/t3.jpg',
        first_name: 'Максим',
        last_name: 'Петров',
        position: 'преподаватель по программированию'
    }
]

const teachersCardsContainer = document.querySelector(".teachers_cards_container");
const teacherModal = document.querySelector('.teacher_modal');



teacherCards.forEach(({avatar, first_name, last_name, position}) => {
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const nameElem = document.createElement('p');
    const positionElem = document.createElement('p');
    const moreElem = document.createElement('span')

    positionElem.innerText = position;
    nameElem.innerText = `${first_name} ${last_name}`;
    imgElem.src = avatar;
    moreElem.innerText = 'Подробнее';
    

    moreElem.addEventListener('click', () => teacherModal.classList.add('modal_active'));

    
    cardElem.append(imgElem, nameElem, positionElem, moreElem);
    teachersCardsContainer.append(cardElem);

});

closeElem.addEventListener('click', () => {
    teacherModal.classList.remove('modal_active');
});




// 7. На сонове массива tariffsData в div.tariffs_cards_container добавить карточки тарифов.

const tariffsData = [
    {
        id: 1,
        title: '--- PRO ---',
        price: '20.000',
        description: 'УМК по робототетхнике и программированию'
    },
    {
        id: 2,
        title: '--- ROBO ---',
        price: '15.000',
        description: 'УМК по робототетхнике '
    },
    {
        id: 3,
        title: '--- PROG ---',
        price: '10.000',
        description: 'УМК по программированию'
    }
]

const tariffsContainer = document.querySelector('.tariffs_cards_container');

tariffsData.forEach(({title, price, description}) => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const descriptionElem = document.createElement('p');

    titleElem.innerText = title;
    priceElem.innerText = price;
    descriptionElem.innerText = description;
    cardElem.append(titleElem, priceElem, descriptionElem);
    tariffsContainer.append(cardElem);
})

