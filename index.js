// Code your solution in this file!
function distanceFromHqInBlocks(address){
    if (address>42)
    {
        return address - 42;
    } else {
        return 42 - address;
    }
}
function distanceFromHqInFeet(address1){
    return distanceFromHqInBlocks(address1)*264;
}
function distanceTravelledInFeet(start,dest){
    if (start<dest){
        return (dest-start)*264;
    } else {
        return (start-dest)*264;
    }
}
function calculatesFarePrice(start1,dest1){
    let k = distanceTravelledInFeet(start1,dest1);
    if (k<=400){
        return 0;
    } else if (k<=2000){
        return (k-400)*0.02;
    } else if (k<=2500){
        return 25;
    } else {
        return "cannot travel that far";
    }



}
