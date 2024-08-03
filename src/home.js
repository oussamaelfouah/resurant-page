export function createHome(parenTdiv) {

    let containerone = document.createElement('div')
    let textone = document.createElement('h2')
    textone.textContent = 'best of all';
    containerone.appendChild(textone)
    document.body.appendChild(containerone)




    let containertwo = document.createElement('div')
    let texttwo = document.createElement('h2')
    texttwo.textContent = 'top chef ';
    containertwo.appendChild(texttwo)
    document.body.appendChild(containertwo)



    let containerthree = document.createElement('div')
    let textthree = document.createElement('h2')
    textthree.textContent = 'you must try';
    containerthree.appendChild(textthree)
    document.body.appendChild(containerthree)

    containerone.style.backgroundColor = "white"
    containerone.style.width = "200px"
    containerone.style.height = "300px"
    containerone.style.display = "flex"
    containerone.style.color = "gray"
    containerone.style.justifyContent = "center"
    containerone.style.alignItems = "center"




    containertwo.style.backgroundColor = "white"
    containertwo.style.width = "200px"
    containertwo.style.height = "300px"
    containertwo.style.display = "flex"
    containertwo.style.color = "gray"
    containertwo.style.justifyContent = "center"
    containertwo.style.alignItems = "center"



    containerthree.style.backgroundColor = "white"
    containerthree.style.width = "200px"
    containerthree.style.height = "300px"
    containerthree.style.display = "flex"
    containerthree.style.color = "gray"
    containerthree.style.justifyContent = "center"
    containerthree.style.alignItems = "center"




    parenTdiv.appendChild(containerone);
    parenTdiv.appendChild(containertwo);
    parenTdiv.appendChild(containerthree);


    parenTdiv.style.display = 'flex'
    parenTdiv.style.gap = '20px'
    parenTdiv.style.paddingTop = '4%'
    parenTdiv.style.flexDirection = 'row'
    parenTdiv.style.flexFlow = 'wrap'
    parenTdiv.style.justifyContent = 'space-around'

}  