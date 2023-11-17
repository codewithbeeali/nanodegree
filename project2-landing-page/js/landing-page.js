'use strict';

{/* <div class="menuItem" id="Sourcing"><a href="#">Sourcing</a></div>
<div class="menuItem" id="Roasting"><a href="#">Roasting</a></div>
<div class="menuItem active" id="Grinding"><a href="#">Grinding</a></div>
<div class="menuItem" id="Brewing"><a href="#">Brewing</a></div> */}
const menuItemClassName = 'menuItem';

// COMMENT: Use only one array to render the headers and section content to maintain consistency.
const pageContent = [
    {
        menuName: 'Sourcing',
        id: '1',
        sectionId: 'Section-1',
        isActive: 0 // COMMENT: Use boolean values instead of 0 and 1
    },
    {
        menuName: 'Roasting',
        id: '2',
        sectionId: 'Section-2',
        isActive: 1
    },
    {
        menuName: 'Grinding',
        id: '3',
        sectionId: 'Section-3',
        isActive: 0
    },
    {
        menuName: 'Brewing',
        id: '4',
        sectionId: 'Section-4',
        isActive: 0
    }
];


const sectionData = [
    {
        type: 'odd-section',
        imageSrc: 'images/section1-image.jpeg',
        id: 'Section-1', // COMMENT: It is typically recommended to avoid using spaces in the id attribute because spaces are not valid characters for IDs. Consider using underscore (section_1) or hyphen (section-1) instead.
        number: '01',
        title: 'Sourcing',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    },
    {
        type: 'even-section',
        imageSrc: 'images/roasting.jpeg',
        id: 'Section-2',
        number: '02',
        title: 'Roasting',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    },
    {
        type: 'odd-section',
        imageSrc: 'images/section1-image.jpeg',
        id: 'Section-3', //3COMMENT: It is typically recommended to avoid using spaces in the id attribute because spaces are not valid characters for IDs. Consider using underscore (section_1) or hyphen (section-1) instead.
        number: '03',
        title: 'Grinding',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    },
    {
        type: 'even-section',
        imageSrc: 'images/roasting.jpeg',
        id: 'Section-4',
        number: '04',
        title: 'Brewing',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    }

];

const menuContainer = document.getElementById('navContainer');

//Generating section data
function generateSections(data) {

    // COMMENT: Consider using innerHTML approach to add complex child elements to a parent div. This allows easy maintainence of code and gives a breif idea about the dom structure in a glance. 

    //generating section content dynamically

    //finding the parent of sections
    const sectionParentDiv = document.querySelector('.sections');

    for (let i = 0; i < data.length; i++) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = data[i].type;
        sectionDiv.id = data[i].id;

        //Section content area div
        const contentAreaDiv = document.createElement('div');
        contentAreaDiv.className = data[i].type.includes('odd') ? 'odd-content-area' : 'even-content-area';


        //Section header div
        const sectionHeaderDiv = document.createElement('div');
        sectionHeaderDiv.className = data[i].type.includes('odd') ? 'odd-section-header' : 'even-section-header';

        const headingNumber = document.createElement('h1');
        headingNumber.textContent = data[i].number;

        const headingText = document.createElement('p');
        headingText.textContent = data[i].title;
        sectionHeaderDiv.append(headingNumber);
        sectionHeaderDiv.append(headingText);

        //Prep section content div
        const sectionContentDiv = document.createElement('div');
        sectionContentDiv.className = data[i].type.includes('odd') ? 'odd-section-content' : 'even-section-content';
        let contentParagraph = document.createElement('p');
        contentParagraph = data[i].content;
        sectionContentDiv.append(contentParagraph);

        contentAreaDiv.append(sectionHeaderDiv);
        contentAreaDiv.append(sectionContentDiv);

        sectionDiv.appendChild(data[i].type.includes('odd') ? createImageDiv(data[i].imageSrc) : contentAreaDiv);
        sectionDiv.appendChild(data[i].type.includes('odd') ? contentAreaDiv : createImageDiv(data[i].imageSrc));
        sectionParentDiv.append(sectionDiv);
    }





}

// Function to create the image div
function createImageDiv(src) {
    var imageDiv = document.createElement('div');
    imageDiv.className = 'imageContent';
    var image = document.createElement('img');
    image.src = src;
    image.alt = 'This is an image';
    image.style.width = '100%';
    image.style.height = '100%';
    imageDiv.appendChild(image);
    return imageDiv;
}





function renderPage() {
    console.log('Page rendering from body loading is calld.')
    createNavigation();
    generateSections(sectionData);
}

function createNavigation() {
    //Step 1: Find the parent div called 'Navigation' using querySelector
    //Step 2: Create an empty div and apply a class on it called 'menu'
    //Step 3: Create 4 more div's with id Sourcing, Roasting, Grinding, Brewing
    //Step 4: Create 4 anchor elements and append them appropriately in different div's corresponding to them
    //Step 5: append the div's to master div menu
    //Step 6: append the menu div to div called 'navigation' 

    //Step 1: Finding the parent
    const nav = document.querySelector('.navigation');

    //Step 2: Create an empty div and apply a class on it called 'menu'
    const menu = document.createElement('div');
    menu.className = 'menu';


    //Step 3: Iterate through the array to build the navigation
    pageContent.forEach(element => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add(menuItemClassName);
        menuItemDiv.id = element.menuName;

        const anchorLink = document.createElement('a');
        anchorLink.textContent = element.menuName;
        anchorLink.href = '#';
        anchorLink.id = element.id;
        menuItemDiv.append(anchorLink);

        if (element.isActive) {
            console.log('i am inside active')
            // COMMENT: Classes could be added or removed using the add/remove method on classList 
            // menuItemDiv.classList.add('active')
            // menuItemDiv.classList.remove('active')
            menuItemDiv.classList.add(menuItemClassName, 'active');
            //menuItemDiv.className = `${menuItemClassName} active`;
        }
        menu.append(menuItemDiv);
    });

    nav.append(menu);

}

//Handling scrolling to section and figuring which menuItem was clicked
menuContainer.addEventListener('click', function (event) {

    let activeLinkId;
    let scrollToSectionId;

    //Looping through to find the current active class and deactive it
    //It also helps removes the class of active on the previous element
    pageContent.forEach(element => {
        if (element.isActive === 1) {
            const activeMenuItem = document.querySelector('.active');
            element.isActive = 0;
            activeMenuItem.classList.remove('active');


        }
        //Setting new menu item to be active
        if (element.id === event.target.id) {
            scrollToSectionId = element.sectionId;
            element.isActive = 1;
            activeLinkId = element.id;
        }
    });
    //setting the parent of active menu with the class 'active'
    event.target.parentElement.classList.add('active');

    const section = document.querySelector(`#${scrollToSectionId}`);
    console.log(section);
    const sectioncoords = section.getBoundingClientRect();

    //scroll to section
    //window.scrollTo(sectioncoords.left,sectioncoords.top);
    window.scrollTo({
        top: sectioncoords.top + window.scrollY,
        behavior: 'smooth'
    });


});
