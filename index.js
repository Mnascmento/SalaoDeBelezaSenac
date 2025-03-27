const agendar = document.getElementById('agendar');
const bloquear = document.getElementById('bloquear');
const desbloquear = document.getElementById('desbloquear');

const conteudoModal = document.getElementById('conteudo-modal');

function marcarAbaAgendar(){
    agendar.classList.add('tab-menu-ativo');
    bloquear.classList.remove('tab-menu-ativo');
    desbloquear.classList.remove('tab-menu-ativo');
}

function marcarAbaBloquear(){
    bloquear.classList.add('tab-menu-ativo');
    agendar.classList.remove('tab-menu-ativo');
    desbloquear.classList.remove('tab-menu-ativo');
}

function marcarAbaDesbloquear(){
    desbloquear.classList.add('tab-menu-ativo');
    agendar.classList.remove('tab-menu-ativo');
    bloquear.classList.remove('tab-menu-ativo');
}

function abrirAbaAgendar(){
    
    marcarAbaAgendar();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row" name="agendar" id="formAgendar">
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input class="form-control" type="date" name="dia">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input class="form-control" type="time" name="horario">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select class="form-select" name="duracao">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Serviços:
                </label>
                <select class="form-select" name="servicos">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Profissionais:
                </label>
                <select class="form-select" name="profissionais">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Clientes:
                </label>
                <select class="form-select" name="clientes">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <input class="form-control" type="text" name="observacoes">
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Feedback:
                </label>
                <textarea class="form-control" style="resize: none;" name="feedback"></textarea>
            </div>
            <div class="col-12">
                <button 
                type="submit" 
                class="btn bg-sucesso text-white w-100"
                data-bs-dismiss="modal" 
                id="btn-agenda"
                >
                    Agendar
                </button>
            </div>
        </form>
    `;

    const btnAgenda = document.getElementById('btn-agenda');

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Agendar';
    btnAgenda.classList.add('bg-sucesso');
    btnAgenda.classList.remove('bg-perigo');

    obterDados('formAgendar');
}

function abrirAbaBloquear(){
    marcarAbaBloquear();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row" name="bloquear" id="formBloquear">
            <div class="mb-3 col-xl-8 col-12">
                <label class="form-label">
                    Profissional:
                </label>
                <select class="form-select" name="profissional">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Motivo:
                </label>
                <select class="form-select" name="motivo">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input type="date" class="form-control" name="dia">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input type="time" class="form-control" name="horario">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select class="form-select" name="duracao">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <textarea class="form-control" style="resize: none;" name="observacoes"></textarea>
            </div>
            <div class="col-12">
                <button 
                type="submit" 
                class="btn bg-sucesso text-white w-100"
                data-bs-dismiss="modal" 
                id="btn-agenda"
                >
                    Agendar
                </button>
            </div>
        </form>
    `;

    const btnAgenda = document.getElementById('btn-agenda');

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Bloquear';
    btnAgenda.classList.add('bg-perigo');
    btnAgenda.classList.remove('bg-sucesso');

    obterDados('formBloquear');
}

function abrirAbaDesbloquear(){
    marcarAbaDesbloquear();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row" name="desbloquear" id="formDesbloquear">
            <div class="mb-3 col-xl-8 col-12">
                <label class="form-label">
                    Profissional:
                </label>
                <select disabled class="form-select" name="profissional">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Motivo:
                </label>
                <select disabled class="form-select" name="motivo">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input disabled type="date" class="form-control" name="dia">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input disabled type="time" class="form-control" name="horario">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select disabled class="form-select" name="duracao">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <textarea disabled class="form-control" style="resize: none;" name="observacoes"></textarea>
            </div>
            <div class="col-12">
                <button 
                type="submit" 
                class="btn bg-sucesso text-white w-100"
                data-bs-dismiss="modal" 
                id="btn-agenda"
                >
                    Agendar
                </button>
            </div>
        </form>
    `;

    const btnAgenda = document.getElementById('btn-agenda');

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Desbloquear';
    btnAgenda.classList.add('bg-perigo');
    btnAgenda.classList.remove('bg-sucesso');

    obterDados('formDesbloquear');
}

function obterDados(id){
    const form = document.getElementById(id);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {}
        for(const [chave, valor] of formData.entries()){
            data[chave] = valor;
        }
        console.log(data);
    })
}

abrirAbaAgendar();

agendar.addEventListener('click', abrirAbaAgendar);
bloquear.addEventListener('click', abrirAbaBloquear);
desbloquear.addEventListener('click', abrirAbaDesbloquear);
