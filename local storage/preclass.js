// var arr = JSON.stringify({Name:"srishti"})
// localStorage.setItem("arr1",arr)

// var data = localStorage.getItem("arr1")
// console.log("data:", JSON.parse(data))


//localStorage.clear()
//getItem()
//setItem()
//removeItem()

// var jsonObj = {
//     "name":"raj",
//     "age":"90",
// } 

//json data --> js objects

var obj = {
    name:'raj',
    age:24
}
var json = JSON.stringify(obj)
console.log("json:",json)

var myObj = JSON.parse(json)
console.log('myObj:', myObj.name)

//send -JSON(stringify)
//work on the data -obj (parse)