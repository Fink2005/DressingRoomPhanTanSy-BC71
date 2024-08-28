



function fetchTabs() {

    fetch('../data/Data.json')
    .then(res => res.json()) // Nếu file là JSON, sử dụng .json()
    .then( function (data)  {
        let specificData =  data.navPills
        renderTabs(specificData)
    })
    .catch(function (error) {
        console.error('Error:', error)
    } );


}
fetchTabs()

function renderTabs (data) { 
    let output = ''
   for (let item of data) {
    output += `    <div class="card">
    <div class="card-header">
      <button class="btn btn-warning p-3" data-bs-toggle="collapse" href="${item.id}">
       ${item.showName}
      </button>
    </div>
            </div>
`

   }
    
 document.getElementById("tabs").innerHTML = output
 console.log("🚀 ~ renderTabs ~ output 123:", output)




}



function fetchContents() {


    fetch('../data/Data.json')
    .then(res => res.json()) // Nếu file là JSON, sử dụng .json()
    .then( function (data)  {
        let specificData =  data.tabPanes
        renderTopCloth(specificData)
        renderBotCloth(specificData)
        renderShoes(specificData)
        renderHandbags(specificData)
        renderNeckLaces(specificData)
        renderHairStyle(specificData)
        renderBackground(specificData)








    


    })
    .catch(function (error) {
        console.error('Error:', error)
    } );




 

    // let showCloth1 = tryCloth1() 
    // console.log("🚀 ~ showKhac ~ showCloth1:", showCloth1)

}

fetchContents()


function renderTopCloth(data) {
   let products = data
   console.log("🚀 ~ render ~ products:", products)
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "topclothes") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button onclick="tryCloth1${item.imgSrc_png}" class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth1").innerHTML = output
    console.log("🚀 ~ render ~ output:", output)
   
}





function renderBotCloth(data) {
   let products = data
   console.log("🚀 ~ render ~ products:", products)
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "botclothes") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth2").innerHTML = output
    console.log("🚀 ~ render ~ output:", output)
   
}


function renderShoes(data) {
   let products = data
   console.log("🚀 ~ render ~ products:", products)
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "shoes") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth3").innerHTML = output
    console.log("🚀 ~ render ~ output:", output)
   
}


function renderHandbags(data) {
   let products = data
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "handbags") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth4").innerHTML = output
   


}
function renderNeckLaces(data) {
   let products = data
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "necklaces") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth5").innerHTML = output
   
}


function renderHairStyle(data) {
   let products = data
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "hairstyle") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth6").innerHTML = output
   


}




function renderBackground(data) {
   let products = data
   let LuuTru = []
     products.forEach(item => {
        if (item.type === "background") {
            LuuTru.push(item)
        }
    })

    let output = ''
    for ( let item of LuuTru) {
        output += `   <div id="cloth" class="card">
        <div class="card-body text-center">
          <img width="100%" src="${item.imgSrc_jpg}" alt="">
          <div class="card-title text-center">
            ${item.name}
          </div>
          <div class="card-text text-center">
            <button class="btn btn-primary"> 
              Thử
            </button>
          </div>
        </div>
      </div>`
    }
    document.getElementById("cloth7").innerHTML = output
   
}