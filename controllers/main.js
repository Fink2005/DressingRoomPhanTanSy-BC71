async function fetchData() {
    try {
        const response = await fetch('../data/Data.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



async function initialize() {
    const data = await fetchData();
    renderTabs(data.navPills)
    renderContents(data.tabPanes)
}

initialize();


function renderTabs(data) {
    const output = data.map(item => `
        <div class="card">
            <div class="card-header">
                <button class="btn btn-warning p-3" data-bs-toggle="collapse" href="${item.id}">
                    ${item.showName}
                </button>
            </div>
        </div>
    `).join('');

    document.getElementById("tabs").innerHTML = output;
    console.log("🚀 ~ renderTabs ~ output:", output);
}


function renderContents(data) {
    const categories = [
        { type: 'topclothes', id: 'cloth1', idShow: "bikinitop" },
        { type: 'botclothes', id: 'cloth2', idShow: "bikinibottom" },
        { type: 'shoes', id: 'cloth3', idShow: "feet"},
        { type: 'handbags', id: 'cloth4', idShow: "handbag" },
        { type: 'necklaces', id: 'cloth5', idShow: "necklace" },
        { type: 'hairstyle', id: 'cloth6', idShow:"hairstyle" },
        { type: 'background', id: 'cloth7', idShow: "background"}
    ];

    categories.forEach(category => {
        renderCategory(category.type, data, category.id);
        handleClick(category.type, data, category.idShow)
    });
}




function renderCategory(type, data, elementId) {
    const items = data.filter(item => {
        return item.type === type
    })
     
    const output = items.map(item => 
       ` <div class="card">
            <div class="card-body text-center">
                <img width="100%" src="${item.imgSrc_jpg}" alt="">
                <div class="card-title text-center">${item.name}</div>
                <div class="card-text text-center">
                    <button id="${item.id}" class="btn btn-primary"> 
                        Thử
                    </button>
                </div>
            </div>
        </div>
    `).join(''); 
 
    document.getElementById(elementId).innerHTML = output;
    console.log("🚀 ~ renderCategory ~ output:", output)
}





function handleClick(dataType, data, dataShow) {
    console.log(dataType, data)
const loc = data.filter(item => {
   return item.type === dataType
})


for (let itemOf of loc) {
    let clickId = itemOf.id
    let clickImg = itemOf.imgSrc_png


    document.getElementById(clickId).addEventListener('click', () =>{
     document.querySelector(`.${dataShow}`).style.backgroundImage = `url(${clickImg})`
})
     
    
 }


}







