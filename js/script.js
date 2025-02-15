const $ = document
const dragArea = $.querySelector('.drag-area');
const header = $.querySelector('header');
const button = $.querySelector('button');
const input = $.querySelector('input');
const image = $.querySelector('#image')
const rejectElm = $.querySelector('.reject')
const changeImageElm = $.querySelector('.change-image')
let src;
let file;
let images = []

dragArea.addEventListener('dragover' , (e) => {
    e.preventDefault()
   dragArea.classList.add('active')

})
dragArea.addEventListener('dragleave' , () => {
   dragArea.classList.remove('active')

})

dragArea.addEventListener('drop' , (e) =>{
e.preventDefault()
file = e.dataTransfer.files[0];
let validExtension = ['image/jpeg' , 'image/jpg' , 'image/png']
let fileType = file.type
if(validExtension.includes(fileType)){
    dragArea.classList.add('active')
    src = URL.createObjectURL(e.dataTransfer.files[0])
    image.setAttribute('src' , src)
    image.style.display = 'block'
     
}else{
    console.log(' no , is not true');
    alert('لطفا عکس را با فرمت های jpeg , jpg , png ارسال کنید')
    dragArea.classList.remove('active')
}
})

button.addEventListener('click' , () => {
    input.click()
    
})

input.addEventListener('change' , () => {
    src = URL.createObjectURL(input.files[0])
    console.log(URL.createObjectURL(input.files[0]));
        dragArea.classList.add('active')
        image.setAttribute('src' , src)
        image.style.display = 'block'
})

rejectElm.addEventListener('click' , () => {
    image.style.display = 'none'
})

changeImageElm.addEventListener('click' ,() => {
    input.click()
} )


