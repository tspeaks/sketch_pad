$(document).ready(function(){
$('body').prepend('<div class="sketchpad"></div>')
$('.sketchpad').prepend('<button onclick="newGrid(); return false">New Grid</button>')

var rows="";
for (i=1; i<17; i++) {
    rows+='<ul></ul>';
}
$('.sketchpad').append(rows);

var columns="";
for (i=1; i<17; i++) {
    columns+='<li></li>';
}
$('ul').append(columns);

$('li').css({
display: 'inline-block',
height: '25px',
width: '25px',
border: '1px black solid',
margin: '0 1px',
})

.hover(function() {
$(this).css('background-color','black')
});

$('.sketchpad').css({
margin: '0 auto'
});

$('ul').css({
padding: '0',
margin: '0'
});


$('button').css({
margin: '10px 0',
padding: '10px',
'font-size': '16px'
});
});

function newGrid(){
$('li').css('background-color','white');
$('.sketchpad').remove()
$('body').prepend('<div class="sketchpad"></div>')

var new_width = prompt('Enter a new grid width');
var new_height = prompt('Enter new grid height');

for (var i=1; i<=new_height;i++){
$('.sketchpad').append('<ul></ul>');
}

for (var i=1; i<=new_width;i++){
$('ul').append('<li></li>');
}

$('.sketchpad').prepend('<button onclick="newGrid(); return false">New Grid</button>')

$('li').css({
display: 'inline-block',
'list-style-type': 'none',
height: '25px',
width: '25px',
border: '1px black solid',
margin: '0 1px',
'box-sizing': 'border-box'
})
.hover(function() {
$(this).css('background-color','black')
});

$('.sketchpad').css({
margin: '0 auto'
});

$('ul').css({
padding: '0',
margin: '0'
});

$('button').css({
margin: '10px 0',
padding: '10px',
'font-size': '16px'
});
};