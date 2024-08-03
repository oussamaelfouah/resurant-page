import { createHome } from "./home";
import { createaboutPage } from "./about";
import './styles.css';
import bgImage from '../assests/food.jpg';
import { clear } from "./about";
import { usButton } from "./us";



document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.style.backgroundImage = './assests/food.jpg';

    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
});



let navbar = document.createElement('div')
let parenTdiv = document.createElement('div')
let home = document.createElement('button')
let about = document.createElement('button')
let us = document.createElement('button')
navbar.appendChild(home);
navbar.appendChild(about);
navbar.appendChild(us);
document.body.appendChild(navbar)
home.textContent = 'home';
about.textContent = 'about';
us.textContent = 'us';


home.style.backgroundColor = "transparent"
home.style.border = "none"
home.style.color = "white"
home.style.fontSize = "20px"

about.style.backgroundColor = "transparent"
about.style.border = "none"
about.style.color = "white"
about.style.fontSize = "20px"

us.style.backgroundColor = "transparent"
us.style.border = "none"
us.style.color = "white"
us.style.fontSize = "20px"






document.body.style.backgroundColor = 'orange';
document.body.style.backgroundImage = `url(${bgImage})`
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-around';
navbar.style.alignContent = 'center';
navbar.style.color = 'white'
navbar.style.backgroundColor = 'gray'
navbar.style.height = '50px'



document.body.appendChild(parenTdiv)


let footer = document.createElement('footer')
function createFooter() {

    document.body.appendChild(footer)
    footer.style.backgroundColor = 'white'
    footer.style.width = '100%'
    footer.style.height = '50px'
    footer.textContent = 'the end of page'
    footer.style.marginTop = '20%'
    footer.style.textAlign = "center"

}
createHome(parenTdiv);
createFooter();
home.addEventListener('click', e => {
    parenTdiv.innerHTML = ''
    footer.innerHTML = ''
    createHome(parenTdiv);
    createFooter();
    clear(parenTdiv)

})


about.addEventListener('click', () => {
    parenTdiv.innerHTML = ''
    footer.innerHTML = ''
    createaboutPage(parenTdiv);
    createFooter();

})
us.addEventListener('click', () => {
    parenTdiv.innerHTML = ''
    footer.innerHTML = ''
    usButton(parenTdiv)
    createFooter();
})
