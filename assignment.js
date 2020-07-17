

// conversion from feet to mile

function feetToMile(feet){
    let mile = feet / 5280;
    if(feet <= 0){
        return "Warning! Distance cannot be 'zero' or 'negative'."
    }
    return mile + " " + "mi";
}

console.log(feetToMile(5280));


// total required wood

function woodCalculator(chair, table, bed){
    let totalWood = chair * 1 + table * 3 + bed * 5;
    if(chair <= 0 || table <= 0 || bed <= 0){
        return "Invalid input! Please insert correct value."
    }
    return totalWood + " " + "cf";
}

console.log(woodCalculator(1, 0, 3));


// total number of bricks

function brickCalculator(n){
    let totalBricks = n;
    for(let i = 1; i <= n; i++){
        if(i <= 10){
            totalBricks = i * 15 * 1000;
            let floors = totalBricks;
        }
        else if(i <= 20){
            floors = totalBricks + (i - 10) * 12 * 1000;
        }
        else{
            totalBricks = floors + (i - 20) * 10 * 1000;
        }
    }
    return "Number of bricks are" + " " + totalBricks;
}

console.log(brickCalculator(30));


// finding my smallest friend

function tinyFriend(friendsName){
    let smallestFriend = friendsName[0];
    let i = 0;
    while(i < friendsName.length){
        let element = friendsName[i];
        i++;
        if(element.length < smallestFriend.length){
            smallestFriend = element;
        }
    }
    return "My smallest friend is" + " " + smallestFriend;
}

console.log(tinyFriend(["hasan", "ronok", "rnk", "rony", "shihab"]));

