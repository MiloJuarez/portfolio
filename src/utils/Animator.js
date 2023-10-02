function bottomToTopAnimation(htmlElement) {
    console.log('top:', htmlElement.offsetTop);
}

addEventListener('DOMContentLoaded', (event) => {
    bottomToTopAnimation(document.querySelector('.EducationLevel'));
});