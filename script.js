// let cars=["BMW","Mercedes","Honda"]
// let models=[2020,2021,2022]


// function calc(...num) {
//     let s=0
//     for (let i = 0; i < num.length; i++) {
//          s += num[i];
        
//     }
//    return s
    
// }

// let x =(y)=>1+y

// let img=document.getElementById('img')

// img.setAttribute('alt','ahmed')
// img.removeAttribute('alt')

// console.log(img);

// ** innerhtml : dans l'element
// ** outerhtml : l'element elkol

// let element=document.getElementById('container')

// element.nextElementSibling.remove()
// console.log(element.parentElement);

// let container=document.createElement('div')
// let head=document.createElement('h1')

// let img=document.createElement('img')
// // add element ***

// let content=document.createTextNode('hello world')
// //img.appendChild('src')
// img.src='img/mesi.jpg'

// head.appendChild(content)

// container.appendChild(head)
// container.appendChild(img)
// document.body.appendChild(container)

// img.style.width='200px'
// container.style.background='#666'
// container.style.color='#fff'
// container.style.textAlign='center'
// let noms=['ahmed','ali','walid','messi']
// let ages=['18 years old','43 years old','29 years old','32 years old']

// let container=document.createElement('div')
// document.body.appendChild(container)
// container.style.textAlign='center'

// // create card
// function createCard(noms='name',ages='cant get it'){
//     let card=document.createElement('div')
//     let title=document.createElement('h2')
//     let age=document.createElement('p')
//     let img=document.createElement('img')
//     //
//     let head=document.createTextNode(noms)
//     let ageContent=document.createTextNode(ages)
//     img.src='img/mesi.jpg'
//     card.style.width='200px'
//     img.style.width='100%'
//     title.appendChild(head)
//     age.appendChild(ageContent)

//     //
//     card.style.color='#fff'
//     card.style.background='#444'
//     card.style.padding='10px'
//     card.style.margin='3px'
//     card.style.display='inline-block'




//     card.appendChild(title)
//     card.appendChild(age)
//     card.appendChild(img)
//     container.appendChild(card)
// }


// for (let i = 0; i <20; i++) {
//     createCard(noms[i],ages[i])}


// ****************** EVENTS ***********************
// USD TO TND
// let usd=document.getElementById('dollar')
// let tnd=document.getElementById('dinar')
// tnd.value=12
// console.log(tnd.value);

// window.onclick=function(){
//     usd.value=null
//     tnd.value=null
    
// }
// usd.onkeyup=function(){
//     tnd.value=usd.value*3.13
// }

// tnd.onkeyup=function(){
//     usd.value=(tnd.value/3.13)
// }
// ***************************************************
// let after=document.getElementById('after')
// let before=document.getElementById('before')
// let append=document.getElementById('append')
// let pTag=document.getElementById('content')
// let divTag=document.getElementById('container')

// divTag.style.background="#fa0"
// divTag.style.height='50px'
// divTag.style.margin='10px 0px'
// pTag.style.margin="10px 10px"

// after.onclick=function(){
//     divTag.after(pTag)
// }
// before.onclick=function(){
//     divTag.before(pTag)
// }
// append.onclick=function(){
//     divTag.append(pTag)
// }

// ******************************************************
// let pTag=document.getElementById('container')

// pTag.onclick=function(){
//     pTag.classList.add("name")
// }
// pTag.oncontextmenu=function(){
//     pTag.classList.remove('name')
// }
//or 
// pTag.onclick=function(){
//     pTag.classList.toggle("name")
// }

// **********************NAV BAR********************************
// let btnOpen =document.getElementById('open')
// let btnclose =document.getElementById('close')
// let container=document.querySelector(".container")

// onload=function(){
//     container.classList.add('hide')
//     btnclose.classList.add('hide')

// }
// btnOpen.onclick=function(){
//     container.classList.remove('hide')
//     btnclose.classList.remove('hide')
// }
// btnclose.onclick=function(){
//     container.classList.add('hide')
// }

// ***************************************************************
let btn=document.getElementById('btn')


onscroll=function(){
if (scrollY>=800){
    btn.classList.remove('hide')
}else {
    btn.classList.add('hide')
}

}
btn.onclick=function(){
 scroll({
    left:0,
    top:100,
    behavior:"smooth"
})
}
