const resume = document.querySelector('resume-elements');


var images_gifs_etc = {
    'My current resume': 'https://joshschaaf.com/images/resume/current-resume.pdf',
    'Conditional Mutagenesis of tcf21 in Zebrafish (undergraduate research poster)': "https://joshschaaf.com/images/resume/tcf21-poster.pdf"
};

var html_string = ``;

Object.keys(images_gifs_etc).forEach(key => {
    html_string += `<div class='single_link'>${key} - <a href='${images_gifs_etc[key]}' rel="noopener noreferrer">${images_gifs_etc[key]}</a></div><br>`;
});



resume.innerHTML = html_string;