// კალკულატორი

let num1 = Number(prompt("ჩაწერე პირველი რიცხვი:"));
let num2 = Number(prompt("ჩაწერე მეორე რიცხვი:"));

let add = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

alert("მიმატებული: " + add);
alert("გამოკლებული: " + subtract);
alert("გამრავლებული: " + multiply);
alert("გაყოფილი: " + (num2 !== 0 ? divide: "ეს რიცხვი ნულზე ვერ გაიყოფა!"));

// დანარჩენი

// let name = "Dach"
// let surname = "Chrdileli"
// let hometown = "Tbilisi"

// let - ით ჩვენ ვქმნით ცვლადს და ვანიჭებთ მას მნიშვნელობას რომლის შეცვლაც შეგვიძლია

// const laptop = "Surface"
// const mobile = "Samsung"
// const watch = "Mi"

//const - ით ჩვენ ვქმნით ცვლადს და ვანიჭებთ მას მნიშვენლობას რომლის შეცვლაც არ შეგვიძლია

//var - ით ჩვენ ვქნით ცვლადს რომელიც ძველ Browser - ებშიც მუშაობს

//აქედან სამივე ერთმანეთისაგან განსხვავდება, მაგალითად let - ის მნიშვნელობის შეცვლა შეგვიძლია, ხოლო const - ის კი არა. var - ი კი ძველ Browser - ებისთვის გამოიყენება.

// მე ასევე დამატებით მასალასაც გადავხედე