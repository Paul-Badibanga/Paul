const weldingDta = [
    {
        title: "Metal Hut",
        image: "IMAGES/hut.jpg"
    },
    {
        title: "Metal CupBoard",
        image: "IMAGES/hut.jpg"
    },
    {
        title: "Metal Gate",
        image: "IMAGES/gate.jpg"
    },
    {
        title: "Metal Chairs & Table",
        image: "IMAGES/chair and table.jpg"
    },
    {
        title: "Metal Stairs",
        image: "IMAGES/sipiral-stairs.jpg"
    },
    {
        title: "Metal Tanks",
        image: "IMAGES/tanks.jpg"
    },
    {
        title: "Metal Fence",
        image: "IMAGES/fence.jpg"
    },
    {
        title: "Trailer",
        image: "IMAGES/trailler.jpg"
    }
]
let galeryDom = ''
weldingDta.forEach((welding)=>{
   galeryDom = galeryDom + `
    <div>
        <p>${welding.title}</p>
        <img src="${welding.image}">
    </div>
    `
})
/*console.log(galeryDom)*/
document.querySelector('.galery-html').innerHTML = galeryDom