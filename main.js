
const passwordHTML = document.querySelector('#password')

passwordHTML.addEventListener('input',()=>{
    const value = passwordHTML.value
    const length= value.length;
    console.log(length)

    document.querySelector(".bg-image").style.filter = `blur(${10-length}px)`;
}
)
