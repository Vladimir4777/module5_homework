let auto = new Map([
    ["ferrari", "sportcars"],
    ["bmw", "bissnescars"],
    ["jeep", "SUV"]
    
  ]);
  
  auto.forEach((value, key, map) => {
    console.log(`${key} - X , ${value} - Y`);
  });