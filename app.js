function criaCartão(categoria, pergunta, resposta) {
   let container = document.getElementById('container')
   let cartão = document.createElement('article')
   cartão.className = 'cartão'

   cartão.innerHTML = `
   <div class="cartão_conteúdo">
   <h3>${categoria}</h3>
   <div class="cartão_conteúdo_pergunta">
      <p>${pergunta}</p>
   </div>
   <div class="cartão_conteúdo_resposta">
      <p>${resposta}<p/>
   </div>
   </div>
   `

   let respostaEstáVisível = false 
   
   function viraCartão() {
    respostaEstáVisível = !respostaEstáVisível
    cartão.classList.toggle('active', respostaEstáVisível)
   }

   cartão.addEventListener('click', viraCartão)


   container.appendChild(cartão)
}
