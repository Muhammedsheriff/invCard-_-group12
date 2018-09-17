/*$('body').keydown(function(event){
    var letter = String.fromCharCode(event.which); 
    if(event.keyCode == 46){
        letter.innerHTML="";
        ;}
 });*/
var si = document.getElementById("your-card");
function cardsize1() {
   si.style.width  = 500;
   si.style.height = 400;
}
function cardsize2()
{
    si.style.width  = 300;
    si.style.height = 300;
}
function cardsize3()
{
    si.style.width = 100;
    si.style.height = 400;
}
function cardsize4()
{
    si.style.width = 250;
    si.style.height = 120;
}
var bg = document.getElementById("set-bg");
function setbg()
{
  si.style.backgroundImage = "url('+bg')"; 
    console.log("aya");
}
     var rotated = false;
var dd=document.getElementById("rotate");
 function rotate(){
    var div = document.getElementById("your-card"),
        deg = rotated ? 0 : 90;

    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
     console.log("aya2");
}
   


var lis = $("#options ul li");

lis.eq(0).css("backgroundColor","teal");
lis.eq(1).css("backgroundColor","tan");
lis.eq(2).css("backgroundColor","orange");
lis.eq(3).css("backgroundColor","#09c");
lis.eq(4).css("backgroundColor","red");
lis.eq(5).css("backgroundColor","black");
lis.eq(6).css("backgroundColor","forestgreen");
lis.eq(7).css("backgroundColor","darkviolet");
lis.eq(8).css("backgroundColor","darksalmon");
lis.eq(9).css("backgroundColor","cadetblue");
lis.eq(10).css("backgroundColor","darkturquoise");
lis.eq(11).css("backgroundColor","darkseagreen");
lis.eq(12).css("backgroundColor","bisque");
lis.eq(13).css("backgroundColor","cadetblue");
lis.eq(14).css("backgroundColor","crimson");
lis.eq(15).css("backgroundColor","darkgray");
lis.eq(16).css("backgroundColor","darkseagreen");
lis.eq(17).css("backgroundColor","cyan");
lis.eq(18).css("backgroundColor","coral");
lis.eq(19).css("backgroundColor","fuchsia");
lis.click(function(){
    
    var bgColor =$(this).css("backgroundColor")  
    $(si).css("backgroundColor",bgColor)
})
var text =document.getElementsByClassName(".hhh");

$(document).ready(function() {

    //$("#div8").draggable().resizable();
    $("#draggable").draggable().resizable();
    
 });

$("#edit").click(function ()
{
    
  $('.hhh').css('display','block');
});
var rem=document.getElementById("remove");
function remove ()
{
    
  si.style.backgroundColor="white";
  si.innerHTML=" ";
  console.log("aya")
}
//---------------------------------------------------------------------------------------
var lisss = $("#first #options ul li ");

lisss.eq(0).css("backgroundColor","teal");
lisss.eq(1).css("backgroundColor","tan");
lisss.eq(2).css("backgroundColor","orange");
lisss.eq(3).css("backgroundColor","#09c");
lisss.eq(4).css("backgroundColor","red");
lisss.eq(5).css("backgroundColor","black");
lisss.eq(6).css("backgroundColor","forestgreen");
lisss.eq(7).css("backgroundColor","darkviolet");
lisss.eq(8).css("backgroundColor","darksalmon");
lisss.eq(9).css("backgroundColor","cadetblue");
lisss.eq(10).css("backgroundColor","darkturquoise");
lisss.eq(11).css("backgroundColor","darkseagreen");
lisss.eq(12).css("backgroundColor","bisque");
lisss.eq(13).css("backgroundColor","cadetblue");
lisss.eq(14).css("backgroundColor","crimson");
lisss.eq(15).css("backgroundColor","darkgray");
lisss.eq(16).css("backgroundColor","darkseagreen");
lisss.eq(17).css("backgroundColor","cyan");
lisss.eq(18).css("backgroundColor","coral");
lisss.eq(19).css("backgroundColor","fuchsia");

/*lis.click(function(){
    
    var bgColor =$(this).css("backgroundColor")
    return bgColor;
    })*/


var liss = $("#second #options ul li ");

liss.eq(0).css("backgroundColor","teal");
liss.eq(1).css("backgroundColor","tan");
liss.eq(2).css("backgroundColor","orange");
liss.eq(3).css("backgroundColor","#09c");
liss.eq(4).css("backgroundColor","red");
liss.eq(5).css("backgroundColor","black");
liss.eq(6).css("backgroundColor","forestgreen");
liss.eq(7).css("backgroundColor","darkviolet");
liss.eq(8).css("backgroundColor","darksalmon");
liss.eq(9).css("backgroundColor","cadetblue");
liss.eq(10).css("backgroundColor","darkturquoise");
liss.eq(11).css("backgroundColor","darkseagreen");
liss.eq(12).css("backgroundColor","bisque");
liss.eq(13).css("backgroundColor","cadetblue");
liss.eq(14).css("backgroundColor","crimson");
liss.eq(15).css("backgroundColor","darkgray");
liss.eq(16).css("backgroundColor","darkseagreen");
liss.eq(17).css("backgroundColor","cyan");
liss.eq(18).css("backgroundColor","coral");
liss.eq(19).css("backgroundColor","fuchsia");

/*liss.click(function(){
    
    var bgColor2 =$(this);
    return bgColor2;
    })*/
$("#verify").click(function(){
   /* $(si).css({
    background: "-webkit-gradient(linear, left top, left bottom, from(+lisss.click+), to(+liss.click+))" 
});*/
    console.log("aya");
});
     


    


//----------------------------------------------------------------------------------------
  // download
var getCanvas; // global variable

    $("#down").on('click', function () {
         html2canvas(si, {
         onrendered: function (canvas) {
                $(si).append(canvas);
                getCanvas = canvas;
             }
         });
    });
$("#download").on('click', function () {
     image.src  = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#download").attr("download", "your_pic_name.png").attr("href", newData);
});
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
var max=document.getElementById("max");
function maxmaize()
{
    si.width=si.width+50;
    console.log("aya")
    si.height=si.height+50;
}
function minimize()
{
    si.width=si.width-50;
    console.log("aya")
    si.height=si.height-50;
}

//----------------------------------------------------------------------------------------
//undo and redo
 /*var btnUndo = document.getElementById('undo');
  var btnRedo = document.getElementById('redo');
  
  btnUndo.addEventListener('click', function() {
    si.undo();
  });
  btnRedo.addEventListener('click', function() {
    si.redo();
  });
  */
  





//----------------------------------------------------------------------------------------
//style="display:none"
/*(function() {

  function add() {
    var red = new fabric.Rect({
      top: 100, left: 0, width: 80, height: 50, fill: 'red' });
    var blue = new fabric.Rect({
      top: 0, left: 100, width: 50, height: 70, fill: 'blue' });
    var green = new fabric.Rect({
      top: 100, left: 100, width: 60, height: 60, fill: 'green' });
    canvas.add(red, blue, green);
  }

  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c');
  var red = new fabric.Rect({
    top: 100, left: 0, width: 80, height: 50, fill: 'red' });
  var blue = new fabric.Rect({
    top: 0, left: 100, width: 50, height: 70, fill: 'blue' });
  var green = new fabric.Rect({
    top: 100, left: 100, width: 60, height: 60, fill: 'green' });
  fabric.Object.prototype.transparentCorners = false;
  canvas.add(red, blue, green)
  var group = $('group'),
      ungroup = $('ungroup'),
      multiselect = $('multiselect'),
      addmore = $('addmore'),
      discard = $('discard');

      addmore.onclick = add;

      multiselect.onclick = function() {
        canvas.discardActiveObject();
        var sel = new fabric.ActiveSelection(canvas.getObjects(), {
          canvas: canvas,
        });
        canvas.setActiveObject(sel);
        canvas.requestRenderAll();
      }

      group.onclick = function() {
        if (!canvas.getActiveObject()) {
          return;
        }
        if (canvas.getActiveObject().type !== 'activeSelection') {
          return;
        }
        canvas.getActiveObject().toGroup();
        canvas.requestRenderAll();
      }

      ungroup.onclick = function() {
        if (!canvas.getActiveObject()) {
          return;
        }
        if (canvas.getActiveObject().type !== 'group') {
          return;
        }
        canvas.getActiveObject().toActiveSelection();
        canvas.requestRenderAll();
      }

      discard.onclick = function() {
        canvas.discardActiveObject();
        canvas.requestRenderAll();
      }


})();*/