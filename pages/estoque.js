const elementoConteudo = document.getElementById('table-place');

const produtos = document.getElementById('produtos');
const fornecedores = document.getElementById('fornecedores');

const formEstoque = document.getElementById('form-estoque');

function abrirAbaProdutos(){
    produtos.classList.add('tab-menu-ativo');
    fornecedores.classList.remove('tab-menu-ativo');
}

function abrirAbaFornecedores(){
    fornecedores.classList.add('tab-menu-ativo');
    produtos.classList.remove('tab-menu-ativo');
}

function exibirTabelaProdutos(){
    formEstoque.innerHTML = ''
    formEstoque.innerHTML = `
        <div class="mb-3">
            <label class="form-label">Nome</label>
            <input type="text" class="form-control" placeholder="Digite um nome">
        </div>
        <div class="mb-3">
            <label class="form-label">Fornecedor</label>
            <input type="text" class="form-control" placeholder="Digite um fornecedor">
        </div>
        <div class="mb-3">
            <label class="form-label">Valor</label>
            <input type="text" class="form-control" placeholder="Digite um valor">
        </div>
        <div class="mb-3">
            <label class="form-label">Marca</label>
            <input type="text" class="form-control" placeholder="Digite uma marca">
        </div>
        <div class="mb-3">
            <label class="form-label">Quantidade</label>
            <input type="text" class="form-control" placeholder="Digite uma quantidade">
        </div>
        <div class="mb-3">
            <label class="form-label">Limite mínimo no estoque</label>
            <input type="text" class="form-control" placeholder="Digite um limite mínimo no estoque">
        </div>
        <div class="mb-3">
            <label class="form-label">Categoria de revenda</label>
            <input type="text" class="form-control" placeholder="Digite uma categoria de revenda">
        </div>
        <div class="mb-3">
            <label class="form-label">Valor de revenda</label>
            <input type="text" class="form-control" placeholder="Digite um valor de revenda">
        </div>
        <div class="mb-3">
            <label class="form-label">Código de barras</label>
            <input type="text" class="form-control" placeholder="Digite um código de barras">
        </div>
    `

    const btnModal = document.querySelectorAll('.btn-modal')
    btnModal.forEach(btn => {
        btn.innerHTML = '';
        btn.innerHTML = 'produto';
    });

    const inputPlaceholder = document.querySelectorAll('.input-placeholder');
    inputPlaceholder.forEach(input => {
        input.setAttribute('placeholder', 'Buscar produto');
    });

    abrirAbaProdutos();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Produtos:</th>
                    <th style="width: 200px;">Valor:</th>
                    <th style="width: 200px;">Quantidade:</th>
                    <th style="width: 200px;">Forcenedor:</th>
                    <th style="width: 200px;">Limite minimo:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input class="form-control" type="text" readonly value="Shampoo Profissional">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="40,00">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="10">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Forcedor XYZ">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="5">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-perigo text-white">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function exibirTabelaFornecedores(){
    formEstoque.innerHTML = ''
    formEstoque.innerHTML = `
        <div class="mb-3">
            <label class="form-label">Nome</label>
            <input type="text" class="form-control" placeholder="Digite um nome">
        </div>
        <div class="mb-3">
            <label class="form-label">CNPJ</label>
            <input type="text" class="form-control" placeholder="Digite um CPNJ">
        </div>
        <div class="mb-3">
            <label class="form-label">Razão social</label>
            <input type="text" class="form-control" placeholder="Digite uma razão social">
        </div>
        <div class="mb-3">
            <label class="form-label">Telefone</label>
            <input type="text" class="form-control" placeholder="Digite seu telefone">
        </div>
        <div class="mb-3">
            <label class="form-label">CEP</label>
            <input type="text" class="form-control" placeholder="Digite um CEP">
        </div>
        <div class="mb-3">
            <label class="form-label">E-mail</label>
            <input type="text" class="form-control" placeholder="Digite um e-mail">
        </div>
        <div class="mb-3">
            <label class="form-label">Endereço</label>
            <input type="text" class="form-control" placeholder="Digite um endereço">
        </div>
        <div class="mb-3">
            <label class="form-label">Estado</label>
            <input type="text" class="form-control" placeholder="Digite um Estado">
        </div>
        <div class="mb-3">
            <label class="form-label">Cidade</label>
            <input type="text" class="form-control" placeholder="Digite uma Cidade">
        </div>
        <div class="mb-3">
            <label class="form-label">Número</label>
            <input type="text" class="form-control" placeholder="Digite um número">
        </div>
        <div class="mb-3">
            <label class="form-label">Complemento</label>
            <input type="text" class="form-control" placeholder="Digite um complemento">
        </div>
    `

    const btnModal = document.querySelectorAll('.btn-modal')
    btnModal.forEach(btn => {
        btn.innerHTML = '';
        btn.innerHTML = 'fornecedor';
    });

    const inputPlaceholder = document.querySelectorAll('.input-placeholder');
    inputPlaceholder.forEach(input => {
        input.setAttribute('placeholder', 'Buscar fornecedor');
    });


    abrirAbaFornecedores();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Fornecedor:</th>
                    <th style="width: 200px;">CNPJ:</th>
                    <th style="width: 200px;">Endereco:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input class="form-control" type="text" readonly value="Fornecedor XYZ">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="12.345.678/0001-90">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Rua das Flores, 123, São Paulo, SP">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-perigo text-white">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

exibirTabelaProdutos()

produtos.addEventListener('click', exibirTabelaProdutos)
fornecedores.addEventListener('click', exibirTabelaFornecedores)