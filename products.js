const postCard = document.getElementById('postCard');


async function getPosts() {

    try {

        let products = await fetch('https://fakestoreapi.com/products');

        // check if posts received

        if (!products.ok) {
            throw new Error(`HTTP error : ${products.status}`);
        }

        products = await products.json();

        products.forEach(eachProduct => {


            postCard.innerHTML += `
               <div class="col-12 col-lg-4 mb-4  " >
                        <div class="card h-100" >
                             <img src="${eachProduct.image}" class="card-img-top img-fluid " alt="...">
                         <div class="card-body d-flex flex-column ">
                             <h5 class="card-title">${eachProduct.category}</h5>
                            <p class="card-text">Title : ${eachProduct.title}</p>
                             <a href="#" class="btn btn-primary mt-auto w-100 ">BUY NOW</a>
                        </div>
                    </div>
                </div>        
      `;

        });

        console.log(products)

    } catch (error) {
        postCard.innerHTML = `${error}`
    }

}

getPosts();