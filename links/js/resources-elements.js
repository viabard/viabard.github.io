const resources = document.querySelector('resources-elements');


var images_gifs_etc = {
    'p5.js (the drawing/rendering library I am using)': 'https://p5js.org/',
    'matter.js (physics engine)': 'https://brm.io/matter-js/',
    'Interactive HTML/CS/JS page editor w/ descriptions': 'https://htmlcheatsheet.com/'
};

var html_string = ``;

Object.keys(images_gifs_etc).forEach(key => {
    html_string += `<div class='single_link'>${key} - <a href='${images_gifs_etc[key]}' rel="noopener noreferrer">${images_gifs_etc[key]}</a></div><br>`;
});



resources.innerHTML = html_string;