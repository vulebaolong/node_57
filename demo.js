// Callback function
const arr = [1,2,3,4,5]

arr.map((item, index, arr) => { })

Array.prototype.myMap = function (callbackFn) {
    const result = []
    for (let index = 0; index < this.length; index++) {
        callbackFn(this[index],index, this)
        result.push(this[index])
    }
    return result
}

const fnCallback = () => {  }

const arrNew = arr.myMap(fnCallback)

try {
    //logic 1
    //logic 1
    //logic 1
    //logic 1
    //logic 1
    //logic 1
    //logic 1
} catch (error) {
    
}

[1,2,3,4,5].forEach(() => { 
    
 })

for (let index = 0; index < array.length; index++) {
    await
}

//  không
//  quên,