document.querySelectorAll(".box .action").forEach( element => {
  element.addEventListener("click",(e)=> {
    e.target.src = e.target.src == "svg/arrow-down.svg" ? "svg/arrow-right.svg" : "svg/arrow-down.svg"
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle("d-none")
  })
})

document.querySelectorAll(".box .tabs .tab").forEach(element => {
  element.addEventListener("click",(e)=>{

    e.target.parentElement.querySelectorAll(".tab").forEach(k => {
      k.classList.remove('active')
      if (k ==  e.target ){
        k.classList.add("active")
      }
    })

    const codesEl = e.target.parentElement.parentElement.querySelector(".codes")
    const type = e.target.classList[0]
    codesEl.querySelectorAll('.code').forEach(x => {
      if (x.classList.contains(type)    ){
        x.classList.remove('d-none')
      }else{
        x.classList.add('d-none')
      }
    })
  })
})
