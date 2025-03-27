let linhas = [];

const elementoConteudo = document.getElementById('table-place');

const ativos = document.getElementById('ativos');
const inativos = document.getElementById('inativos');

function tornarAtivo() {
    ativos.classList.add('tab-menu-ativo');
    inativos.classList.remove('tab-menu-ativo');
}

function tornarInativo() {
    inativos.classList.add('tab-menu-ativo');
    ativos.classList.remove('tab-menu-ativo');
}

function exibirTabelaAtivos() {
    tornarAtivo();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;" id="tabela-ativa">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Nome:</th>
                    <th style="width: 200px;">Disponibilidade:</th>
                    <th style="width: 200px;">Função:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody id="tbody-ativos">

            </tbody>
        </table>
    `;
}

function exibirTabelaInativos() {
    tornarInativo();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;" id="tabela-inativa">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Nome:</th>
                    <th style="width: 200px;">Disponibilidade:</th>
                    <th style="width: 200px;">Função:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody id="tbody-inativos">
                <tr>
                    <td>
                        <input class="form-control" type="text" readonly value="Paula">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Sexta a domingo">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Cabeleireira">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-sucesso text-white">
                            <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function obterDadosFormulario() {
    const formFuncionario = document.getElementById('form-funcionario');

    formFuncionario.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(formFuncionario);

        const objetoForm = {}

        for (const [chave, valor] of formData.entries()) {
            objetoForm[chave] = valor;
        };

        linhas.push(`
                <tr id="linha-${linhas.length}">
                    <td>
                        <input class="form-control" type="text" readonly value="${objetoForm.nome}">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="${objetoForm.disponibilidade}">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="${objetoForm.funcao}">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white" onclick="editarLinha(${linhas.length - 1}, ${objetoForm})">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-perigo text-white" onclick="deletarLinha(${linhas.length - 1})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
        `);
        
        atualizarLinhas();
    })
}

function deletarLinha(index) {
    linhas.splice(index, 1);
    atualizarLinhas();
}


function editarLinha(id, objetoForm) {
    //
}

function atualizarLinhas(){
    const tbodyAtivos = document.getElementById('tbody-ativos')
    tbodyAtivos.innerHTML = linhas.reduce((acc, linha) => acc + linha, '');
}

exibirTabelaAtivos();

ativos.addEventListener('click', exibirTabelaAtivos);
inativos.addEventListener('click', exibirTabelaInativos);

obterDadosFormulario();
