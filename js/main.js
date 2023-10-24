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

$("#color-text").addEventListener("input", (e) => {
    $(".meme-image").style.backgroundColor= e.target.value
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

$("#font").addEventListener("input", (e)=>{
    $(".top-text").style.fontFamily= e.target.value
})

$("#font").addEventListener("input", (e)=>{
    $(".bottom-text").style.fontFamily= e.target.value
})

$("#number").addEventListener("input", (e) =>{
    $(".top-text") .style .fontSize = `${e.target.value}px`
})

$("#number").addEventListener("input", (e) =>{
    $(".bottom-text") .style .fontSize = `${e.target.value}px`
})

$("#displayTopText").addEventListener ("input", (e) =>{
    if (e.target.checked){
        $(".meme-text1").style.display = "none"
    }else{
        $(".meme-text1").style.display = "block"
    }
})

$("#displayBottomText").addEventListener ("input", (e) => {
    if (e.target.checked){
        $(".meme-text2").style.display = "none"
    } else{
        $(".meme-text2").style.display = "block"
    }
})

$("#fondoTrans").addEventListener ("input", (e) =>{
    if (e.target.checked){
        $(".meme-text1").style.backgroundColor="transparent"
   
    } else{
        
    }
    })

$("#fondoTrans").addEventListener ("input", (e) =>{
    if (e.target.checked){
        $(".meme-text2").style.backgroundColor="transparent"
       
    } else{
        
    }
    })    

// $("#btn-contorno").addEventListener ("click", (e) => {
//  $(".top-text").style.webkitTextStroke="white 2px"
// })   

const allFilterMeme = () => {
    $(".meme-image").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotation(${$("#hue-rotation").value}deg) saturation(${$("#saturation").value}%) invert(${$("#invert").value})`
}

$("#opacity").addEventListener("change", allFilterMeme)
$("#brightness").addEventListener("change", allFilterMeme)
$("#contrast").addEventListener("change", allFilterMeme)
$("#blur").addEventListener("change", allFilterMeme)
$("#grayscale").addEventListener("change", allFilterMeme)
$("#sepia").addEventListener("change", allFilterMeme)
$("#hue-rotation").addEventListener("change", allFilterMeme)
$("#saturation").addEventListener("change", allFilterMeme)
$("#invert").addEventListener("change", allFilterMeme)

// evento de boton reset no funciona ver
// $("#reset").addEventListener ("click", () =>{
//     $("#opacity").value = "1"
//     $("#brightness").value ="1"
//     $("#contrast").value ="100%"
//     $("#blur").value="0px"
//     $("#grayscale").value="0%"
//     $("#sepia").value ="0%"
//     $("#hue-rotation").value="0 deg"
//     $("#saturation").value="100%"
//     $("#invert").value="1"
//     $(".meme-image").style.filter="none"
// })
