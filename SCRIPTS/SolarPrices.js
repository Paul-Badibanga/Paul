const solarPrices = [
    {
        Title: 'Monocristallin Panel Kit & Acid Battery',
        image : 'IMAGES/solar-kit.png'
    },

    {
        Title: 'Monocristallin Panel Kit & Gel Battery',
        image : 'IMAGES/solar-kit.png'  
    },

    {
        Title: 'Polycristallin Panel Kit & Acid Battery',
        image : 'IMAGES/solar-kit.png' 
    },

    {
        Title: 'Polycristallin Panel Kit & Gel Battery',
        image : 'IMAGES/solar-kit.png'
    }
];

let grids = ''
let GenerateHml = document.getElementById('generateGrids')
solarPrices.forEach((data)=>{
    grids = grids + `
    <div class="sub-grid">
        <h3>${data.Title}</h3>
        <div class="image"><img src="${data.image}" alt="Solar energy kit"></div>
        <div class="sub-icons">
            <input type="number" placeholder="Kw">
            <button>Price</button>
        </div>
        <div class="price">Enquire</div>
    </div>
    `
})

GenerateHml.innerHTML = grids

/*--------------------------Component Replacement------------------*/
const ComponentPricing = [
    {
        title: 'MPPT INVERTER',
        image: 'IMAGES/mppt-controler.png',
    },
    {
        title: 'GEL BATTERY',
        image: 'IMAGES/gel-battery.webp',
    },
    {
        title: 'ACID BATTERY',
        image: 'IMAGES/batteries.jpg',
    }
]
let GenHtml = ''
ComponentPricing.forEach((component)=> {
    GenHtml += `
        <div class="sub-grid">
            <h3>${component.title}</h3>
            <div class="image"><img src="${component.image}" alt="Solar energy kit"></div>

            <div class="price">Enquire</div>
        </div>
    `
})
console.log(GenHtml)
document.querySelector('.generateGrids').innerHTML = GenHtml