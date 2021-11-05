function superbowlWin(records){
    const yearFound = records.find(record => record.result === "W")
    if (yearFound){
        return yearFound.year;
    }
    
}


/*function superbowlWin(array) {
    const found = array.find(object => 
    // insert condition to match 
    //use dot notation to check the year property of object)

    return found
} 
*/