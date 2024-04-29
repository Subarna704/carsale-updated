// script.js
const cars = [
    { model: "Toyota Camry", location: "Sydney CBD", image: "car.jpg" },
    { model: "Honda Civic", location: "Bondi Beach", image: "car.jpg" },
    { model: "Ford Mustang", location: "Darling Harbour", image: "https://example.com/ford_mustang.jpg" },
    { model: "Tesla Model S", location: "Circular Quay", image: "https://example.com/tesla_model_s.jpg" },
    { model: "BMW 3 Series", location: "Manly Beach", image: "https://example.com/bmw_3_series.jpg" },
    { model: "Audi A4", location: "The Rocks", image: "https://example.com/audi_a4.jpg" },
    { model: "Mercedes-Benz C-Class", location: "Sydney Olympic Park", image: "https://example.com/mercedes_benz_c_class.jpg" },
    { model: "Chevrolet Silverado", location: "Bondi Junction", image: "https://example.com/chevrolet_silverado.jpg" },
    { model: "Subaru Outback", location: "Parramatta", image: "https://example.com/subaru_outback.jpg" },
    { model: "Jeep Wrangler", location: "Chatswood", image: "https://example.com/jeep_wrangler.jpg" }
  ];
  
  function setHeaderText() {
    const headerText = document.getElementById("headerInput").value;
    document.getElementById("headerText").innerText = headerText;
  }
  
  function searchCars() {
    const model = document.getElementById("modelInput").value.toLowerCase();
    const location = document.getElementById("locationInput").value.toLowerCase();
    
    const filteredCars = cars.filter(car => car.model.toLowerCase().includes(model) && car.location.toLowerCase().includes(location));
    
    displayCars(filteredCars);
  }
  
  function displayCars(cars) {
    const carListContainer = document.getElementById("carList");
    carListContainer.innerHTML = "";
    
    if (cars.length === 0) {
      carListContainer.innerHTML = "<p>No cars found.</p>";
      return;
    }
    
    cars.forEach(car => {
      const li = document.createElement("div");
      li.classList.add("car-item");
      const img = document.createElement("img");
      img.classList.add("car-img");
      img.src = car.image;
      img.alt = car.model;
      li.appendChild(img);
      const info = document.createElement("div");
      info.classList.add("car-info");
      info.textContent = `${car.model} - Location: ${car.location}`;
      li.appendChild(info);
      carListContainer.appendChild(li);
    });
  }
  
  // Display all cars initially
  displayCars(cars);
  