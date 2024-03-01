document.addEventListener('DOMContentLoaded', function() {
    homeSec();
});


function createFooter() {
    const footer = document.createElement('footer');

    document.body.appendChild(footer);
}

createFooter();

const contentDiv = document.querySelector('#content');

function clearContent() {
    contentDiv.innerHTML = '';
}


function aboutSec() { 
    clearContent();
    aboutBtn.classList.add('active');
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    
    function createHeading() {
        const contentDiv = document.querySelector('#content');
    
        const headingDiv = document.createElement('div');
        headingDiv.classList.add('heading');
    
        const headingText = document.createElement('h1')
        headingText.textContent = 'Royal Spice';
    
        headingDiv.appendChild(headingText);
        contentDiv.appendChild(headingDiv);
    }

    function createContentDiv1() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-1');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function contentHead() {
        const title = document.querySelector('.content-1');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'ABOUT US'
    
        title.appendChild(topText);
    }
    
    function contentBody() {
        const title = document.querySelector('.content-1');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'Royal Spice is a highly-rated family-owned Indian restaurant established a few years ago with a simple aim to serve people the most authentic Indian dishes in the heart of London, UK.<br><br>It is known for serving authentic Indian cuisine that reflects the diverse flavors and culinary traditions of Mumbai, India. The restaurant is located in a vibrant and bustling part of the city, making it a popular destination for both locals and tourists. The restaurant’s decor is modern and stylish, with comfortable seating and a warm and welcoming atmosphere. The walls are adorned with vibrant artwork, adding to the overall ambiance of the space. The lighting is warm and inviting, creating a cozy and intimate setting that is perfect for dining with friends and family.<br><br>We are located in the City between Liverpool Street and Aldgate underground station.';
    
        title.appendChild(contBody);
    }


    function createContentDiv2() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-2');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function openHead() {
        const title = document.querySelector('.content-2');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'OPENING HOURS'
    
        title.appendChild(topText);
    }
    
    function openBody() {
        const title = document.querySelector('.content-2');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'Mon to Fri 4:00PM to 10:00PM<br><br>Sat and Sun 4:00PM to 12:00PM';
    
        title.appendChild(contBody);
    }

    function createContentDiv3() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-3');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function contactHead() {
        const title = document.querySelector('.content-3');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'CONTACT US'
    
        title.appendChild(topText);
    }
    
    function contactBody() {
        const title = document.querySelector('.content-3');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'Royal Spice Restaurant<br></br> 7 Middlesex St, Spitalfields, London E1 7AA<br></br> 020 7247 6461<br></br> info@mumbaisquare.co.uk';
    
        title.appendChild(contBody);
    }

    createHeading();
    createContentDiv1();
    contentHead();
    contentBody();
    createContentDiv2();
    openHead();
    openBody();
    createContentDiv3();
    contactHead();
    contactBody();
}
function homeSec() { 
    clearContent();
    aboutBtn.classList.remove('active');
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    
    function createHeading() {
        const contentDiv = document.querySelector('#content');
    
        const headingDiv = document.createElement('div');
        headingDiv.classList.add('heading');
    
        const headingText = document.createElement('h1')
        headingText.textContent = 'Royal Spice';
    
        headingDiv.appendChild(headingText);
        contentDiv.appendChild(headingDiv);
    }

    
    function createContentDiv1() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-1');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function contentHead() {
        const title = document.querySelector('.content-1');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'WELCOME'
    
        title.appendChild(topText);
    }
    
    function contentBody() {
        const title = document.querySelector('.content-1');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = '“In order to make a splash in the City of London, a restaurant really does need<br></br> to have a certain degree of wow factor, which is exactly what sets Royal Spice apart from its contemporaries. With high ceilings and a glass-fronted mezzanine level, Royal Spice’s dining room is sleek and chic. This Indian restaurant caters well for the demanding local crowd of businessmen and women as well as locals and picky tourists fresh from the capital’s sights. The menu at Royal Spice is a blend of classic Indian dishes which will appeal<br></br> to the traditionalists and contemporary creative twists to please the demanding<br></br> connoisseur of today’s more diverse Indian inspired restaurant cuisine. High quality throughout, from the slick service to the attractive surroundings and of course, the considered menus and drinks list.”';
    
        title.appendChild(contBody);
    }


    function createContentDiv2() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-4');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function openHead() {
        const title = document.querySelector('.content-4');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'OUR SPECIALITIES'
    
        title.appendChild(topText);
    }
    
    function openBody() {
        const title = document.querySelector('.content-4');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'At Royal Spice, our chefs designed a menu to reflect our ethos and creativity using traditional Indian recipes. We only use halal meat.<br></br> We have also created a special Vegan menu.<br></br> You will have an intimate and relaxed dining experience with dedicated staff ensuring your time in our premises is memorable.';
    
        title.appendChild(contBody);
    }

    function createContentDiv3() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-5');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function contactHead() {
        const title = document.querySelector('.content-5');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'VENUE HIRE'
    
        title.appendChild(topText);
    }
    
    function contactBody() {
        const title = document.querySelector('.content-5');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'In addition to catering and event spaces, Royal Spice Indian Restaurant also provides a range of services to help you plan your wedding party. The event planners can work with you to create a personalized menu and décor, and can also coordinate with outside vendors such as florists, DJs, and photographers. Mumbai Square Indian Restaurant is a fantastic venue for hosting wedding parties, office parties, corporate parties, and birthday parties. With delicious cuisine, elegant event spaces, and comprehensive services, we can help you create the perfect event that you and your guests will remember for a lifetime.';
    
        title.appendChild(contBody);
    }

    createHeading();
    createContentDiv1();
    contentHead();
    contentBody();
    createContentDiv2();
    openHead();
    openBody();
    createContentDiv3();
    contactHead();
    contactBody();
}
function menuSec() { 
    clearContent();
    aboutBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    menuBtn.classList.add('active');

    function createHeading() {
        const contentDiv = document.querySelector('#content');
    
        const headingDiv = document.createElement('div');
        headingDiv.classList.add('heading');
    
        const headingText = document.createElement('h1')
        headingText.textContent = 'Royal Spice';
    
        headingDiv.appendChild(headingText);
        contentDiv.appendChild(headingDiv);
    }

    
    function createContentDiv6() {
        const contentDiv = document.querySelector('#content');
    
        const contDiv = document.createElement('div');
        contDiv.classList.add('content-6');
    
        contentDiv.appendChild(contDiv);
    }
    
    
    function contentHead() {
        const title = document.querySelector('.content-6');
    
        const topText = document.createElement('h1');
        topText.classList.add('content-heading')
    
        topText.textContent = 'FROM OUR MENU'
    
        title.appendChild(topText);
    }
    
    function contentBody() {
        const title = document.querySelector('.content-6');
    
        const contBody = document.createElement('p');
        contBody.classList.add('content-body')
    
        contBody.innerHTML = 'Mumbai Square’s menu offers a wide range of vegetarian and non-vegetarian dishes, including curries, tandoori dishes, biryanis, and street food. The chefs use only the freshest and highest quality ingredients to prepare each dish, ensuring that every bite is bursting with flavor and aroma.';
    
        title.appendChild(contBody);
    }

    function createGridtDiv() {
        const contentDiv = document.querySelector('#content');

        const gridDiv = document.createElement('div');
        gridDiv.classList.add('menu-grid');
    
        contentDiv.appendChild(gridDiv);
    }

    function appendMenuItems() {
        const contentDiv = document.querySelector('#content');
        const menuItems = [
            { name: 'CURRY DISHES', price: '£7.95 – £13.95', description: 'Cooked with saucy medium spice.' },
            { name: 'ESSA GOBI', price: '£14.95', description: 'Tiger prawns and broccoli cooked with exotic spices and coconut milk.' },
            { name: 'CHICKEN SHASHLIK', price: '£9.95', description: 'Grilled in a clay oven with green peppers, tomatoes and onions.' },
            { name: 'CHICKEN TIKKA REZALA', price: '£10.95', description: 'Marinated sliced chicken tikka, fresh coriander and green chili.' },
            { name: 'CHICKEN TIKKA MASALA', price: '£10.95', description: 'GCooked with coconut, sugar and lime juice.' },
            { name: 'CHANA MASALA (VEGAN)', price: '£4.50 - £8.50', description: 'Spiced chickpeas.' },
            { name: 'PALAK PANEER (VEGETARIAN)', price: '£4.50 - £8.50', description: 'Creamy spinach with cheese.' },
            { name: 'ALOO GOBI (VEGAN)', price: '£4.50 - £8.50', description: 'Cauliflower and potatoes.' },
            { name: 'TARKA DALL (VEGAN)', price: '£4.50 - £8.50', description: 'Lentils garnished with garlic.' },
            { name: 'BOMBAY ALOO (VEGAN)', price: '£4.50 - £8.50', description: 'Spicy potatoes.' },
        ];
    
        const menuGrid = document.createElement('div');
        menuGrid.classList.add('menu-grid');
    
        menuItems.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
    
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
    
            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
    
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
    
            menuItemDiv.appendChild(itemName);
            menuItemDiv.appendChild(itemPrice);
            menuItemDiv.appendChild(itemDescription);
    
            menuGrid.appendChild(menuItemDiv);
        });
    
        contentDiv.appendChild(menuGrid);
    }
    





    

    
    createHeading();
    createContentDiv6();
    contentHead();
    contentBody();
    appendMenuItems();
    
}



const aboutBtn = document.querySelector('#about-btn');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');


aboutBtn.addEventListener('click', aboutSec);
homeBtn.addEventListener('click', homeSec);
menuBtn.addEventListener('click', menuSec);






