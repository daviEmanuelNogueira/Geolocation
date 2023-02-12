let h1 = document.querySelector('h1');

function sucess(pos){
  console.log(pos)
  h1.textContent = `Latitude ${pos.coords.latitude}, Longitude ${pos.coords.longitude}`
}

navigator.geolocation.getCurrentPosition(sucess)