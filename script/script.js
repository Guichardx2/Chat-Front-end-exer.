let inp_message = document.querySelector("#message");
let btnsend = document.querySelector("#btn-send");

function sendMessage (event){
    event.preventDefault()
    
    const newfield = document.createElement('div')
    newfield.classList.add("message-item-user")
    newfield.innerHTML = `<div class="message-chat"> <strong>Você diz:</strong> </div>
    <div class="message-user"> ${inp_message.value} </div>`
    
    const list_message= document.querySelector(".chat-area") 
    list_message.appendChild(newfield)
    
    if (inp_message.value.trim() !== ''){
        inp_message.value = ''
    }
}
btnsend.addEventListener("click", sendMessage)
