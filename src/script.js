const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

var mybutton = document.getElementById("myBtn");

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition-delay:${idx * 75}ms">${letter}</span>`)
        .join('')
})

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++
    
    if (load > 99) {
        clearInterval(int)
      }
    
      loadText.innerText = `${load}%`
      loadText.style.opacity = scale(load, 0, 100, 1, 0)
      bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }
    
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }