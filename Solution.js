

var jump = function(array) {
    let largest_index = -1;
    let new_largest_index = -1;
    let count = 0;
    if (array.length == 1) {
        return count;
    }
    for (let index = 0; index < array.length; index++) {
        let val = array[index];
        let total = val + index;
        if (total > new_largest_index) {
            new_largest_index = total;
        }
        if (largest_index <= index) {
            largest_index = new_largest_index;
            count++;
        }
        if (largest_index >= array.length - 1) {
            return count
        }
    }
    return count
    
};
