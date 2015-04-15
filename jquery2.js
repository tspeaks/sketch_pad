$(document).ready(function(){
$('body').prepend('<div class="container"></div>')
var rows="";
for (i=0; i<17; i++) {
    rows+='<ul></ul>';
}
$('.container').append(rows);
var columns="";
for (i=0; i<17; i++) {
    columns+='<li></li>';
}
$('ul').append(columns);
$('li').css({
display: 'inline-block',
'list-style-type': 'none',
height: '25px',
width: '25px',
border: '1px black solid',
margin: '0 1px',
'box-sizing': 'border-box'
}).hover(function() {
$(this).css('background-color','black')
});
$('.container').css({
margin: '0 auto'
});
$('ul').css({
padding: '0',
margin: '0'
});
});