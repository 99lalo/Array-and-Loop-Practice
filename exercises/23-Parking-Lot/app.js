let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const getParkingLotState = (nestedArray) => {
    let totalSlots = 0;
    let availableSlots = 0;
    let occupiedSlots = 0;
    let parkingSpots = {totalSlots, availableSlots, occupiedSlots};
    nestedArray.forEach(value => value.forEach(function(joder){
        if(joder == 1){
            parkingSpots.occupiedSlots += 1;
        } else if(joder == 2){
            parkingSpots.availableSlots += 1;
        }
        if(joder == 1 || joder == 2){
            parkingSpots.totalSlots += 1;
        }
    })
    )
   return parkingSpots;
}
console.log(getParkingLotState(parking_state))
