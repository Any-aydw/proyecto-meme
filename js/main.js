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

$("#color").addEventListener("input", (e)=>{
    $(".meme-text2").style.backgroundColor= e.target.value
})

$("#color-font") .addEventListener("input", (e) => {
    $(".div-meme") .style.color= e.target.value
})

const allFiltersMeme = () => {
    $(".meme-image").style.filter = `brightness (${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contraste").value}%) blur(${$("#blur").value}px) grayscale (${$("#grayscale").value}%) sepia (${$("#sepia").value}%) hue-rotation (${$("#hue-rotation").value} deg ) saturation (${$("#saturation").value}%) invert (${$("#invert").value})`
}

$("#opacity").addEventListener ("input", allFiltersMeme)
$("#brightness").addEventListener ("input", allFiltersMeme)
$("#contrast").addEventListener ("input", allFiltersMeme)
$("#blur").addEventListener ("input", allFiltersMeme)
$("#grayscale").addEventListener ("input", allFiltersMeme)
$("#sepia").addEventListener ("input", allFiltersMeme)
$("#hue-rotation").addEventListener ("input", allFiltersMeme)
$("#saturation").addEventListener ("input", allFiltersMeme)
$("#invert").addEventListener ("input", allFiltersMeme)