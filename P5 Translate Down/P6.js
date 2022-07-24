const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
    const triggerBotton = window.innerHeight/5 * 3.5

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBotton) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })


}