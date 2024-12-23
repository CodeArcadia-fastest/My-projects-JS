let container = document.querySelector('.container')
let number = document.querySelector('#letter-number')
let result = document.querySelector('.result')

let tanlanganlar = JSON.parse(localStorage.getItem("word"))
// malumotlari yuklash
for(let i = 0; i< tanlanganlar.length; i++){
   // qisqa usuli bilan otilgan item data tenglangagn
   let box = document.createElement('div')
   box.classList.add('box')
   box.innerHTML = `
   <p class="title-uzb">${tanlanganlar[i]['name-uzb']}</p>
   <img src="/pages/photos/${tanlanganlar[i]['img']}" alt="" class="image">
   <input type="text" class="inp">
   `
//    tanlanganlar.push(item)
   // maulmotlarni push qilish 
//    localStorage.setItem("word", JSON.stringify(tanlanganlar))
   //  string qilib word degan key ochilgan va tanlanganlar ni local stroga yuborgan
   container.appendChild(box)
  
}    

let inp = document.querySelectorAll('.inp')
inp.forEach((item, num)=>{
    item.addEventListener('input', ()=> {
        if (item.value == tanlanganlar[num]['name-eng']) {
            item.style.backgroundColor = "green"
        }
        else {
     item.style.backgroundColor = "red"
        }
    })
    
})
