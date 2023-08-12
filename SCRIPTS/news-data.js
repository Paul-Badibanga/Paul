const products = [
    {
        title: 'Phone Flashing',
        image: 'IMAGES/smartphone-repair_1280.jpg',
        date: '09/08/2023',
        texContent: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
        sapiente quaerat nulla doloribus ut 
        accusantium fuga, expedita, mollitia totam deserunt quas.
        `
    },

    {
        title: 'Artificial Intelligence',
        image: 'IMAGES/arduino.jpg',
        date: '14/08/2023',
        texContent: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
        sapiente quaerat nulla doloribus ut 
        accusantium fuga, expedita, mollitia totam deserunt quas.`
    },
    {
        title: 'Camera Installation',
        image: 'IMAGES/cctv.jpg',
        date: '14/08/2023',
        texContent: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
        sapiente quaerat nulla doloribus ut 
        accusantium fuga, expedita, mollitia totam deserunt quas.`
    },
]
let dataHtml = ''
products.forEach((product) => {
    dataHtml = dataHtml + `
    <div class="container">
        <div class="title">${product.title}</div>
        <div class="gridContainer">
            <div class="image">
                <img src="${product.image}">
                <div class="date">${product.date}</div>
            </div>
            <div class="detailsContents">${product.texContent}</div>
        </div>
    </div>
    `
})
let newsinerHtml = document.querySelector('.Maincontainer');
newsinerHtml.innerHTML = dataHtml
console.log(newsinerHtml.innerHTML)