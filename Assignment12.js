//Assignment 12

// Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
 
const employee = {
    name : "Shruti",
    email : "abcd@gmail.com",
    age : 25,
    id : 1234,
    address : "Shajapur",
    phone : 1234567890,
    gender : "Female"

};

try {
    throw employee.age / null ;
} catch (err) {
    console.log (employee.age / 2);
}

//Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function
  
const printNumbers = (m , n)=>{
    for(let i = m; i<=n; i++){
        setTimeout(() => {
            console.log(i);

        }, i*100);
    }
}

printNumbers( 1, 20);
