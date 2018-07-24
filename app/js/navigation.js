var nav = document.getElementsByClassName('nav')[0];

function toggleMenu() {
    if (nav.className === 'nav') {
        nav.className += ' open';
    } 
    else {
        nav.className = 'nav';
    }
}