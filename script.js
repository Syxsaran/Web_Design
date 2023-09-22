const menuItems = document.querySelectorAll('nav a');


const contentElement = document.querySelector('main');


function displayContent(content) {
    contentElement.innerHTML = content;
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.getAttribute('href') === '#') {
            displayContent('นี่คือหน้าหลัก');
        } else if (item.getAttribute('href') === '#about') {
            displayContent('เกี่ยวกับเรา');
        } else if (item.getAttribute('href') === '#courses') {
            displayContent('ข้อมูลหลักสูตร');
        } else if (item.getAttribute('href') === '#contact') {
            displayContent('ติดต่อเรา');
        }
    });
});



const nav = document.querySelector('nav');

const stickyOffset = nav.offsetTop;

function checkScroll() {
    if (window.pageYOffset >= stickyOffset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', checkScroll);



