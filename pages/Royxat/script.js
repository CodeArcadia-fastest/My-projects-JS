
// let taomlar = ["Qaynatilgan tuxum, sabzavotli salat",
//     "Achchiq qahva",
//     "Guruch, tovuq go'shti va sabzavotlar",
//     "Pishiriq va choy",
//     "Ko'k choy va somsa",
//     "Yogurt va yong'oq",
//     "Murabbo va sariyog' bilan non",
//     "Yogurt va meva",
//     "Makaron va sosiskalar",
//     "Nonushta va kofe",
//     "Grechka va go'sht",
//     "Shokolad va sut",
//     "Non, sariyog' va asal",
//     "Choy va pishiriqlar",
//     "Qo'ziqorinli sho'rva",
//     "Pishiriq va sharbat",
//     "Tovuq sho'rva va non",
//     "Sut va non",
//     "Tuxumli qovurma va pomidor",
//     "Meva smuzi",
//     "Shavla",
//     "Choy va yong'oq",
//     "Sabzavotli salat va kotlet",
//     "Meva va choy",
//     "Non va pishloq",
//     "Qahva va shokolad",
//     "Palov",
//     "Kofe va shirinlik",
//     "Mantilar",
//     "Pishloq va sut",
//     "Non, sariyog' va murabbo",
//     "Choy va pishiriq",
//     "Tovuq go'shti va salat",
//     "Choy va non",
//     "Sho'rva va salat",
//     "Meva va qatiq",
//     "Qaynatilgan tuxum va olma",
//     "Meva va yong'oq",
//     "Dimlama",
//     "Sharbat va pishiriq",
//     "Fasol va salat",
//     "Choy va non"]

// let food = document.querySelectorAll('.food')
// window.addEventListener("keypress", (e) => {
//     if (e.key == 'Enter') { 
//         for(let i=1; i<=100; i++){
//             let rand1 = Math.floor(Math.random()*100)%42
//             let rand2 = Math.floor(Math.random()*100)%42
//             let t = taomlar[rand1]
//             taomlar[rand1] = [rand2]
//             taomlar[rand2] = t
//         }
      
//         // IKKINCHI USUL
//         // for(let i=0; i<=41; i++) {
//         //    food[i].textContent = taomlar[i]
//         //    console.log(taomlar[i]);
//         //    console.log(i);
           
//         // }




//         // birinchi usul
//         food.forEach((item,index)=>{
//             item.textContent = taomlar[index]
//             console.log(taomlar[index]);
            
//         })
//     }
// })

let taomlar = [
    "Qaynatilgan tuxum, sabzavotli salat", "Achchiq qahva", "Guruch, tovuq go'shti va sabzavotlar", 
    "Pishiriq va choy", "Ko'k choy va somsa", "Yogurt va yong'oq", "Murabbo va sariyog' bilan non", 
    "Yogurt va meva", "Makaron va sosiskalar", "Nonushta va kofe", "Grechka va go'sht", 
    "Shokolad va sut", "Non, sariyog' va asal", "Choy va pishiriqlar", "Qo'ziqorinli sho'rva", 
    "Pishiriq va sharbat", "Tovuq sho'rva va non", "Sut va non", "Tuxumli qovurma va pomidor", 
    "Meva smuzi", "Shavla", "Choy va yong'oq", "Sabzavotli salat va kotlet", "Meva va choy", 
    "Non va pishloq", "Qahva va shokolad", "Palov", "Kofe va shirinlik", "Mantilar", "Pishloq va sut", 
    "Non, sariyog' va murabbo", "Choy va pishiriq", "Tovuq go'shti va salat", "Choy va non", 
    "Sho'rva va salat", "Meva va qatiq", "Qaynatilgan tuxum va olma", "Meva va yong'oq", 
    "Dimlama", "Sharbat va pishiriq", "Fasol va salat", "Choy va non"
];

let food = document.querySelectorAll('.food');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

window.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        // Shuffle the array using Fisher-Yates algorithm
        shuffleArray(taomlar);

        // Update the DOM with the shuffled items
        food.forEach((item, index) => {
            item.textContent = taomlar[index];
            console.log(taomlar[index]); // Log the food for debugging purposes
        });
    }
});
