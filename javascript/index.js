fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => {
        return res.json()
    }).then(data => {
        item = data.categories;

console.log(item)
        var html = "";

        item.forEach(element => {
            html +=
                `
            
       <div class="card mt-4">
         <img class="card-img-top" src=${element.strCategoryThumb} alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${element.strCategory}</h4>
            <p class="text">${element.strCategoryDescription}</p>
         </div>
      </div>
       
       
       
       `
        });


        var inner = document.querySelector("#category").innerHTML=html



    })


var home= document.querySelector("#home");
home.addEventListener("click",function(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => {
        return res.json()
    }).then(data => {
        item = data.categories;

console.log(item)
        var html = "";

        item.forEach(element => {
            html +=
                `
            
       <div class="card mt-4">
         <img class="card-img-top" src=${element.strCategoryThumb} alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${element.strCategory}</h4>
            <p class="text">${element.strCategoryDescription}</p>
         </div>
      </div>
       
       
       
       `
        });


        var inner = document.querySelector("#category").innerHTML=html



    })
})