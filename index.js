
// Function to calculate the distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // HQ is on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to calculate the distance from HQ in feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Function to calculate the distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }
  
  // Function to calculate the fare price
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
  }
  
  console.log(distanceFromHqInBlocks(50)); 
  console.log(distanceFromHqInFeet(50));  
  console.log(distanceTravelledInFeet(34, 38)); 
  console.log(calculatesFarePrice(34, 38)); 
  console.log(calculatesFarePrice(50, 58)); 
  console.log(calculatesFarePrice(34, 70)); 
  