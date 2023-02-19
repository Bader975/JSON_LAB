
const obj = { name: "bader", bootcamp: "back-end" };
let obj_json = JSON.stringify(obj);
console.log(obj);
console.log(obj.name);
console.log(obj.bootcamp);
console.log(obj_json);
console.log(obj_json.name);
let result_obj = JSON.parse(obj_json);
console.log(result_obj.name);


fetch('./lab2.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
  
