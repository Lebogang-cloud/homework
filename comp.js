function comp(a,b,c){ 
    var min = 0; 
    if(a < b && a <c){ 
        min = a; 
    } 
    if(b < a && b <c){ 
        min = b; 
    } 
    else { 
        min = c; 
    } 
    console.log("The minimum is " + min); 



var min = 0;
if(a > b && a >c){
max = a;
}
if(b > a && b > c) {
max = b;
}
else {
max = c;
}
console.log("The maximum is " + max);

}
comp(3,33,13);