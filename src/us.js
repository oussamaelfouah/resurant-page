import picone from '../assests/picone.jpg';
import pictwo from '../assests/pictwo.jpg';
import picthree from '../assests/picthree.jpg';
import picfour from '../assests/picfour.jpg';
import picfive from '../assests/picfive.jpg';

import './styles.css';




export function usButton(parenTdiv) {
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    img1.src = picone
    parenTdiv.appendChild(img1)
    img1.style.width = '300px'
    img1.style.height = 'auto'

    img2.src = pictwo;
    parenTdiv.appendChild(img2)
    img2.style.width = '300px'
    img2.style.height = 'auto'
    img3.src = picthree
    parenTdiv.appendChild(img3)
    img3.style.width = '300px'
    img3.style.height = 'auto'
    img4.src = picfour
    parenTdiv.appendChild(img4)
    img4.style.width = '300px'
    img4.style.height = 'auto'
    img5.src = picfive
    parenTdiv.appendChild(img5)
    img5.style.width = '300px'
    img5.style.height = 'auto'
    parenTdiv.style.display = 'inline-flex'
    parenTdiv.style.display = 'flex'
    parenTdiv.style.justifyContent = 'space-between'
    parenTdiv.style.alignitems = 'center'



}