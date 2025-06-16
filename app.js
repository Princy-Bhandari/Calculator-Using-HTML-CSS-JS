const display_screen= document.querySelector('.display_screen')
const button=document.querySelectorAll('button')

button.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=='clear'){
            display_screen.innerText = ''
        }
        else if(item.id=='backspace'){
            let string = display_screen.innerText.tostring()
            display_screen.innerText = string.substr(0, string.length-1)
        }

        else if(display_screen.innerText!=''&& item.id =='equal'){
            display_screen.innerText = eval(display_screen.innerText)
        }
        else{
            display_screen.innerText+= item.id
        }
    }
})