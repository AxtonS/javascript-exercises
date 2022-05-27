const removeFromArray = function() {
    let length = arguments.length;          
    let args = Array.from(arguments);       
    let array = args[0];                    
    for(i = length - 1; i > 0; i--){        
        let arg = args[i];                  
        for(j = array.length -1; j >=0; j--){
            if(array[j] === arg){             
                array.splice(j, 1);         
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
