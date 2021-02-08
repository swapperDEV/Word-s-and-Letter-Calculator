const text = document.querySelector('textarea')
text.addEventListener('keyup', () => {
    if(text.value != '') {
        document.querySelector('.error').textContent = ''
        const array = text.value.split(' ')
        const letters = text.value.length - array.length + 1
        console.log(`${array.length}, ${letters}`);
        document.querySelector('.countW').textContent = array.length
        document.querySelector('.countL').textContent = letters
    }
    else {
        document.querySelector('.error').style.color = 'red'
        document.querySelector('.error').textContent = 'Input words!'
    }
})