let num=prompt("Enter a Number")
if(num%2==0){
    alert(`${num} is Even Number`)
}
else(
    alert(`${num} is a odd Number`)
)

alert(`Now we check two numbers Greater or Equal or Smaller`)
let num1= prompt("Enter First Number :")
let num2= prompt("Enter Second Number :")
if(num1>num2){
    alert(`Greater`)
}else if(num1===num2){
    alert(`Equal`)
}
else if(num1<num2){
    alert(`Smaller`)
}