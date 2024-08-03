import one from '../assests/one.jpg';

import './styles.css';

export function createaboutPage(parenTdiv) {

    const hello = document.createElement('p')
    parenTdiv.appendChild(hello)
    hello.textContent = 'hello my world '
    parenTdiv.style.backgroundImage = `url(${one})`
    parenTdiv.style.backgroundImage = './assests/one.jpg';
    parenTdiv.style.backgroundSize = 'cover';
    parenTdiv.style.backgroundPosition = 'center';
    parenTdiv.style.width = "100%";
    parenTdiv.style.height = "900px";


}
export function clear(parenTdiv) {
    parenTdiv.style.backgroundImage = ``

}