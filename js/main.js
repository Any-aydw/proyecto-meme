const $ = (selector) => document.querySelector(selector)

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

$("#botttext").addEventListener("input", (e)=>{
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

$("#font-number").addEventListener("input", (e) =>{
    $(".top-text") .style .fontSize = `${e.target.value}px`
})
$("#font-number").addEventListener("input", (e) =>{
    $(".bottom-text") .style .fontSize = `${e.target.value}px`
})

$("#displayTopText").addEventListener("input", (e) =>{
    if (e.target.checked){
        $(".meme-text1").style.display = "none"
    }else{
        $(".meme-text1").style.display = "block"
    }
})
$("#displayBottomText").addEventListener("input", (e) => {
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
        $(".meme-text1").style.backgroundColor="var(--background-quaternary)"
   }
  })
$("#fondoTrans").addEventListener ("input", (e) =>{
    if (e.target.checked){
     $(".meme-text2").style.backgroundColor="transparent"
     } else{
         $(".meme-text2").style.backgroundColor="var(--background-quaternary)"
    }
   })

$("#text-line").addEventListener ("input", (e) => {
    $(".meme-text1").style.lineHeight= e.target.value
})

$("#text-line").addEventListener ("input", (e) => {
    $(".meme-text2").style.lineHeight= e.target.value
})

$("#text-padding").addEventListener ("input", (e) => {
    $(".meme-text1").style.padding = `${e.target.value}px`
})
$("#text-padding").addEventListener ("input", (e) => {
    $(".meme-text2").style.padding = `${e.target.value}px`
})

$(".btn-claro").addEventListener ("click", (e) => {
    $(".meme-text1").style.webkitTextStroke= "white 1px"
})
$(".btn-claro").addEventListener ("click", (e) => {
    $(".meme-text2").style.webkitTextStroke= "white 1px"
})

$(".btn-oscuro").addEventListener ("click", (e) => {
    $(".meme-text1").style.webkitTextStroke= "black 1px"
})
$(".btn-oscuro").addEventListener ("click", (e) => {
    $(".meme-text2").style.webkitTextStroke= "black 1px"
})
$(".btn-ninguno").addEventListener ("click", (e) => {
    $(".meme-text1").style.webkitTextStroke= "none"
})
$(".btn-ninguno").addEventListener ("click", (e) => {
    $(".meme-text2").style.webkitTextStroke= "none"
})

$("#color-img").addEventListener ("input", (e) => {
    $("#meme").style.backgroundBlendMode= e.target.value
})

$("#align-left").addEventListener ("click", (e) => {
    $(".top-text").style.textAlign="left"
})

$("#align-left").addEventListener ("click", (e) => {
    $(".bottom-text").style.textAlign="left"
})

$("#align-right").addEventListener ("click", (e) => {
    $(".top-text").style.textAlign="right"
})

$("#align-right").addEventListener ("click", (e) => {
    $(".bottom-text").style.textAlign="right"
})

$("#align-center").addEventListener ("click", (e) => {
    $(".top-text").style.textAlign="center"
})

$("#align-center").addEventListener ("click", (e) => {
    $(".bottom-text").style.textAlign="center"
})

$(".button-panel-img").addEventListener ("click", (e) => {
    if (e.target.click){
      $("#meme-panel-image").classList.remove("visibility--hidden")
      $("#meme-panel-text").classList.add("visibility--hidden")
    }
})
$(".button-panel-txt").addEventListener ("click", (e) => {
    if (e.target.click){
      
      $("#meme-panel-text").classList.remove("visibility--hidden")
      $("#meme-panel-image").classList.add("visibility--hidden")
    }
})


 const downloadMeme = () => {
     domtoimage.toBlob($(".div-meme")).then((blob) => {
       saveAs(blob, "my-meme.png")
    })
 }
  $(".btn-download").addEventListener("click", downloadMeme)

const allFilterMeme = () => {
    const brightness = $("#brightness").value;
    const opacity = $("#opacity").value;
    const constrast = $("#contrast").value;
    const blur = $("#blur").value;
    const grayscale = $("#grayscale").value;
    const sepia = $("#sepia").value;
    const hue = $("#hue-rotation").value;
    const saturation = $("#saturation").value;
    const invert = $("#invert").value;

    $("#meme").style.filter =`brightness(${brightness}) opacity(${opacity}) contrast(${constrast}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturation}%) invert(${invert}%)`;
}

$("#blur").addEventListener("change", allFilterMeme)
$("#brightness").addEventListener("change", allFilterMeme)
$("#opacity").addEventListener("change", allFilterMeme)
$("#contrast").addEventListener("change", allFilterMeme)
$("#grayscale").addEventListener("change", allFilterMeme)
$("#sepia").addEventListener("change", allFilterMeme)
$("#hue-rotation").addEventListener("change", allFilterMeme)
$("#saturation").addEventListener("change", allFilterMeme)
$("#invert").addEventListener("change", allFilterMeme)



// evento de boton reset 
$("#reset").addEventListener ("click", () =>{
$("#opacity").value = "1"
$("#brightness").value ="1"
$("#contrast").value ="100"
$("#blur").value="0"
$("#grayscale").value="0"
$("#sepia").value ="0"
$("#hue-rotation").value="0"
$("#saturation").value="100"
$("#invert").value="1"
$("#meme").style.filter="none"
 })
