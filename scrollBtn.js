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