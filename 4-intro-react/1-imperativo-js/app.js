


const miBoton = document.querySelectorAll('.btn')

miBoton.forEach( btn => {

    btn.addEventListener('click',()=>{
        btn.style.backgroundColor = btn.innerText
        btn.innerText = 'Cambiado'
    })
})

//qué pasa si le doy click a perú