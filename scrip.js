function textColor(col){
    document.getElementById("text").style.color=col
}
function backColor(col){
    document.getElementById("text").style.backgroundColor=col
}
function fontstyle(name){
    document.getElementById('text').style.fontFamily=name
}
function textfontsize(num){
    document.getElementById("text").style.fontSize=num+"px"
}
function Downloadpic(){
    html2canvas(document.querySelector('#text')).then(canvas=>{
        const link = document.createElement('a')
        link.href = canvas.toDataURL()
        link.download = 'image.png'
        console.log("hello")
        link.click()
    }
)
}