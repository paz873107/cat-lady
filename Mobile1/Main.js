var winHeight = window.innerHeight    || 
document.documentElement.clientHeight || 
document.body.clientHeight;

var pageHeight = $('body').height();
if (pageHeight < winHeight) {
    $('.main-content,').css('min-height',winHeight)
}