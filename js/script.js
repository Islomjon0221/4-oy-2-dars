
// 1-misol
let m1a = +prompt ("1-misol a")
let m1b = +prompt ("1-misol b")

if (m1a > m1b) {
    m1a**=2
    console.log (m1a)
}
else {
    m1b**=2
    console.log (m1b)
}

// 2-misol

let m2a = +prompt ("2-misol a")
let m2b = +prompt ("2-misol b")
let m2c = +prompt ("2-misol c")

if (m2a > m2b) {
    // console.log (m2a)
    if (m2a > m2c) {
        console.log (m2a)
    }
    
    else {
        console.log (m2c)
    }
}
else {
    // console.log (m2b)
    if (m2b > m2c) {
        console.log (m2b)
    }
    
    else {
        console.log (m2c)
    }
}

// 3-misol

let m3a = +prompt ("3-misol a")

if (m3a % 2 == 0) {
    console.log ("Juft son")
}
else {
    console.log ("Toq son")
}

// 4-misol

let m4a = +prompt ("4-misol a")

if (m4a % 5 == 0) {
    console.log ("Rost")
}
else {
    console.log ("Yolg'on")
}

// 5-misol

let m5a = +prompt ("5-misol a")

m5a = m5a / 10

console.log (m5a)

// 6-misol

let m6a = +prompt ("6-misol a")

    m6a=m6a % 10
    console.log (m6a)

// 7-misol

let m7a = +prompt ("7-misol a");
let m7b;

if (m7a < 99) {
m7b=m7a/10;
m7a=m7a%10;
if (m7a>m7b) {
    console.log("yolg'on");
}
else {
    console.log("rost");
}
}
else {
    console.log("Boshqa son kiriting")
}

// 8-misol 

let m8a = +prompt ("8-misol a");

m8a=m8a%10;
if (m8a % 2 == 0) {
    console.log ("rost");
}
else {
    console.log ("yolg'on")
}

// 9-misol

let m9a = +prompt ("9-misol a");

if (m9a < 999) {
    m9a = m9a/100;
console.log (m9a);
}
else {
    console.log ("3 xonali son kiriting")
}

// 10-misol

let m10a = +prompt ("10-misol a");
let m10b;
let m10c;
m10b = m10a / 100
m10c = m10a %100 / 10
m10a = m10a % 10

if (m10a > m10b) {
    // console.log (m10a)
    if (m10a > m10c) {
        console.log (m10a)
    }
    
    else {
        console.log (m10c)
    }
}
else {
    // console.log (m10b)
    if (m10b > m10c) {
        console.log (m10b)
    }
    
    else {
        console.log (m10c)
    }
}