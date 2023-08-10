const products = [
    {
        title : 'Phone Flashing',
        image : 'IMAGES/smartphone-repair_1280.jpg',
        date : '09/08/2023',
        texContent : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
        sapiente quaerat nulla doloribus ut 
        accusantium fuga, expedita, mollitia totam deserunt quas.
        `
    },

    {
        title : 'Phone Flashing',
        image : 'IMAGES/smartphone-repair_1280.jpg',
        date : '09/08/2023',
        texContent : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
        sapiente quaerat nulla doloribus ut 
        accusantium fuga, expedita, mollitia totam deserunt quas.`
    }
]
let dataHtml = ''
products.forEach((product)=>{
    dataHtml = dataHtml + `
    <div class="container">
        <div class="title">Phone Flashing</div>
        <div class="gridContainer">
            <div class="image">
                <img src="IMAGES/smartphone-repair_1280.jpg">
                <div class="date">09/08/2023</div>
            </div>
            <div class="detailsContents">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi aliquam a officia praesentium nobis libero iste sit blanditiis
                    sapiente quaerat nulla doloribus ut 
                    accusantium fuga, expedita, mollitia totam deserunt quas.
            </div>
        </div>
    </div>
    `
})
let newsinerHtml = document.getElementsByTagName('main');
