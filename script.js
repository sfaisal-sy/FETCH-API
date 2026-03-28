let card = document.getElementById('card');

async function getUsersData () {
    try {

      const users = await fetch ('https://jsonplaceholder.typicode.com/users');

      // check if data not receifed 
      if(!users.ok) {
        throw new Error (`HTTP error : ${users.status}`);
      }

      const userData = await users.json();
      userData.forEach(eachData => {
      
          card.innerHTML += `
               <div class="col-12 col-lg-4 mb-4  " >
                 <div class="card h-100 " >
                    <h2 class='text-center'>USER DATA</h2>
                     <div class="card-body">
                         <h5 class="card-title">USER ID : ${eachData.id}</h5>
                         <p class="card-text">NAME : ${eachData.name}</p>
                         <p class="card-text">USER NAME : ${eachData.username}</p>
                         <p class="card-text">USER EMAIL : ${eachData.email}</p>
                         <p class="card-text">PHONE # : ${eachData.phone}</p>
                         
                     </div>                    
                 </div>                
             </div>        
      `;
      })
      console.log(userData)

    } catch (error){
        card.innerHTML = `
          ${error}
        `
    }
}
getUsersData();



