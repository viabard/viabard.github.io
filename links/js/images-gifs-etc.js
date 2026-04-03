const ige = document.querySelector('ige');


var images_gifs_etc = {
    'Squiggly text (bottom right of home page)': 'https://3dtext2gif.com/',
    'GIF cropping and such': 'https://ezgif.com/crop',
    'GIFs': 'https://giphy.com',
    'Johannes Vermeer aesthetic': 'https://www.britannica.com/biography/Johannes-Vermeer'
};

var html_string = ``;

Object.keys(images_gifs_etc).forEach(key => {
    html_string += `<div class='single_link'>${key} - <a href='${images_gifs_etc[key]}' rel="noopener noreferrer">${images_gifs_etc[key]}</a></div><br>`;
});



ige.innerHTML = html_string;