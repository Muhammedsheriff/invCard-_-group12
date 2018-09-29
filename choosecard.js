function swipe()
{
   var photo=document.getElementById("sora");
    photo.style.display="block";
    photo.style.width=200+"px";
    photo.style.height=200+"px";
    var url=photo.getAttribute("src");
    window.open(url,"Image","width=photo.style.width,height=photo.style.height,resizable=1");
    
}