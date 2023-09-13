const images = {
    aboutPage: "IMAGES/about-photo.jpg"
}

const aboutImage = document.getElementById('aboutImage')

aboutImage.innerHTML = `
<div class="aboutImage" id="aboutImage">
    <img src="${images.aboutPage}">
</div>
`