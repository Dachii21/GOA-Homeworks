

// for(let i = 1; i < 20; i++) {
//     if(i == 15) {
//         break
//     }
// }

// console.log(i)

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//       continue;
//     }
//     if (i === 15) {
//       break;
//     }
// }

// console.log(i);

for (let i = 1; i <= 100; i++) {
    if (i % 4 !== 0) {
      continue;
    }
    if (i === 50) {
      break;
    }
}

console.log(i);