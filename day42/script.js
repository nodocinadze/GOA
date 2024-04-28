for (let num1=0; num1<100; num1++){
    console.log(num1)
}

for (let num2=100; num2>0; num2--){
    console.log(num2)
}

for (let num3=0; num3<20; num3++){
    if (num3%2==0){
        console.log(num3 + " is even!")
    } else{
        console.log(num3 + " is odd!")
    }
}

let friend=prompt("Enter name: ")
if (friend=="Andria" || friend=="Gio"){
    console.log("My friend")
} else{
    console.log("Not friend")
}

let num4 = 0;
while (num4 < 100){
    if (num4 % 5 === 0){
        console.log(num4 + " is a multiple of five!");
    }else{
        console.log(num4 + " is not a multiple of five!");
    }
    num4++;
}