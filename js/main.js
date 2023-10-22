const $= (selector) => document.querySelector(selector)

$ (".button-theme").addEventListener("click",() =>{
    const currentTheme = $ ("body") .getAttribute("data-theme")
    if (currentTheme){
        $("body").removeAttribute ("data-theme", "light-theme")
    } else{
        $ ("body").setAttribute ("data-theme", "light-theme")
    }
})
$("#toptext").addEventListener( "input", (e) => {
    $(".top-text").innerText = e.target.value
})
$("#bottext").addEventListener("input", (e)=>{
   $(".bottom-text").innerText= e.target.value
})
$("#text").addEventListener("input", (e)=>{
    $(".meme-image").style.backgroundImage=`url(${e.target.value})`
})
$("#color").addEventListener("input", (e)=>{
    $(".meme-text1").style.backgroundColor= e.target.value
})
// $("#color").addEventListener("input", (e)=>{
//     $(".top-text").style.color= e.target.value
// })
