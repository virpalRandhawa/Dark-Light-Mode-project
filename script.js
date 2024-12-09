const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark & Light Images(to stop repittion)
function imageMode(color) {
    image1.src = `image/undraw_mobile_content_xvgr_${color}.svg`;
    image2.src = `image/undraw_love_it_xkc2_${color}.svg`;
    image3.src = `image/undraw_barista_qd50_${color}.svg`;
 }
// DarkMode style
function darkMode() {
   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   textBox.style.backgroundColor = 'rbg(255 255 255 / 50%)';
   toggleIcon.children[0].textContent = 'Dark Mode';
   toggleIcon.children[1].classList.remove('fa-sun');
   toggleIcon.children[1].classList.add('fa-moon');
//    eithe dark mode image c;
   imageMode('dark');
}
// light mode style
function lightMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%))';
    textBox.style.backgroundColor = 'rbg(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    // image1.src = 'image/undraw_mobile_content_xvgr_light.svg';
    // image2.src = 'image/undraw_love_it_xkc2_light.svg';
    // image3.src = 'image/undraw_barista_qd50_light.svg';
    imageMode('light');
 }


//switch theme dynamatically
function switchTheme(event) {
    // console.log(event.target.checked);
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark'); 
        localStorage.setItem('theme', 'dark');
        darkMode();      
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// check localStorage for theme
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if(currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme); 
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}























