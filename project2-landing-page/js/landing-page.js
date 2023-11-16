'use strict';

{/* <div class="menuItem" id="Sourcing"><a href="#">Sourcing</a></div>
<div class="menuItem" id="Roasting"><a href="#">Roasting</a></div>
<div class="menuItem active" id="Grinding"><a href="#">Grinding</a></div>
<div class="menuItem" id="Brewing"><a href="#">Brewing</a></div> */}
const menuItemClassName = 'menuItem';
const pageContent = [
    {
        menuName: 'Sourcing',
        id: 'Sourcing',
        isActive: 0
    },
    {
        menuName: 'Roasting',
        id: 'Roasting',
        isActive: 0
    },
    {
        menuName: 'Grinding',
        id: 'Grinding',
        isActive: 1
    },
    {
        menuName: 'Brewing',
        id: 'Brewing',
        isActive: 0
    }
];


const sectionData = [
    {
        type: 'odd-section',
        imageSrc: 'images/section1-image.jpeg',
        id: 'Section 1',
        number: '01',
        title: 'Sourcing',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    },
    {
        type: 'even-section',
        imageSrc: 'images/roasting.jpeg',
        id: 'Section 2',
        number: '02',
        title: 'Roasting',
        content: 'The journey begins with selecting high-quality coffee beans.Coffee is often sourced from various regions worldwide, each offering unique flavor profiles. Beans are chosen based on factors like origin, variety,and processing methods.'
    }

];

//Generating section data
function generateSections(data) {
    //generating section content dynamically

    //finding the parent of sections
    const sectionParentDiv = document.querySelector('.sections');

    for (let i = 0; i < data.length; i++) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = data[i].type;

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
    for (let i = 0; i < pageContent.length; i++) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = `${menuItemClassName}`;
        menuItemDiv.id = `${pageContent[i].id}`;
        const anchorLink = document.createElement('a');
        anchorLink.textContent = `${pageContent[i].menuName}`;
        anchorLink.href = '#';
        menuItemDiv.append(anchorLink);
        if (pageContent[i].isActive) {
            menuItemDiv.className = `${menuItemClassName} active`;
        }
        menu.append(menuItemDiv);
    }
    nav.append(menu);

}

