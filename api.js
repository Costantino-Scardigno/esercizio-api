const getcar = () => {
    fetch('https://api.pexels.com/v1/search?query=car', {
        headers: {
            authorization: "3KYNCLAE2y5Yjf24h3lOC94RA30yKGvjdwQDTggzxn0bbnzdmPMnZEAY",
        }
    })


      .then((response) => {
        
        if (response.ok) {
          return response.json() 
        } else {
          throw new Error('Errore generico nella chiamata')
        }
      })
      .then((responseObj)=>{
        const btnLoad = document.getElementsByClassName("btn-primary")
        btnLoad.onclick= loadimg()
        const cardImgs = document.getElementsByClassName("card-img-top")
        responseObj.photos.forEach((car, index) => {
            if (cardImgs[index]) {
              cardImgs[index].src = car.src.original; 
              console.log(cardImgs[index].src); 
            }
          });
      })}
    
    
    
    
    
    

window.onload= () => {  getcar()}





