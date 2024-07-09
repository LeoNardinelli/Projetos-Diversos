let totalGeral = 0;
limpar(); 

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preço = quantidade * valorUnitario;
    
    carrinho = document.getElementById('lista-produtos'); 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`

    totalGeral = totalGeral + preço; 

    campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`; 
    document.getElementById('quantidade').value = 0; 
    

}

function limpar() {
 totalGeral = 0;
 campoTotal = document.getElementById('valor-total').innerHTML = 'R$ 0'; 
 carrinho = document.getElementById('lista-produtos').innerHTML = '';
}