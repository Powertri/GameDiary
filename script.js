document.querySelector("#salvar").addEventListener("click", cadastrar);
let listaTarefas = [];

function cadastrar() {
  const modal = bootstrap.Modal.getInstance(
    document.querySelector("#registerTask")
  );
  let titulo = document.querySelector("#titulo").value;
  let descricao = document.querySelector("#descricao").value;
  let pomodoros = document.querySelector("#pomodoro").value;

  const tarefa = {
    id: Date.now(),
    titulo,
    descricao,
    pomodoros,
    concluida: false,
  };
  if (tarefa.titulo.length == 0) {
    document.querySelector("#titulo").classList.add("is-invalid");
  }
  listaTarefas.push(tarefa);

  document.querySelector("#tarefas").innerHTML += create(tarefa);

  salvar() 
  modal.hide();
}

function create(tarefa) {
  const disabled = (tarefa.concluida) ? "disabled" : ''
  return `<div class="col-12 col-md-6 col-lg-3">
                <div onclick="changeBackgroundColor(this)" class="card">
                    <div class="card-header">
                        ${tarefa.titulo}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.descricao}</p>
                        <p>
                            <span class="badge text-bg-warning">
                                ${tarefa.pomodoros} pomodoros
                            </span>
                        </p>
                        <a href="#" onclick="concluir(${tarefa.id})" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a href="#" onclick="apagar(${tarefa.id})" class="btn btn-danger ${disabled}">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->`;
}

let isRunning = false;
let timer = {
  minutes: 25,
  seconds: 0,
};
let intervalSeconds = 1000;

document.getElementById("timer").addEventListener("click", startToRun);

var interval;

updateClock();

function changeBackgroundColor(card) {
  card.style.backgroundColor = "#d3d4d9";
}

function salvar() {
  localStorage.setItem("lista_tarefas", JSON.stringify(listaTarefas));
}

function startToRun() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    const seconds = `${timer.seconds}`.padStart(2, "0");
    const minutes = `${timer.minutes}`.padStart(2, "0");
    if (!isRunning) {
      return;
    }
    if (seconds == 0) {
      if (minutes == 0) {
        isRunning = false;

        timer.minutes = 25;
        timer.seconds = 0;

        return;
      }
      timer.minutes = timer.minutes - 1;
      timer.seconds = 59;
    } else {
      timer.seconds = timer.seconds - 1;
    }
    updateClock();
  }, intervalSeconds);

  if (isRunning) {
    isRunning = false;
    return;
  } else {
    isRunning = true;
  }
}

function apagar(id) {
  listaTarefas = listaTarefas.filter((eachTarefa) => {
    return eachTarefa.id !== id;
  });
  salvar();
  atualizar();
}

function atualizar() {
  document.querySelector("#tarefas").innerHTML = "";
  listaTarefas.forEach((eachTarefa) => {
    document.querySelector('#tarefas') += create(eachTarefa)
  });
}

function updateClock() {
  const seconds = `${timer.seconds}`.padStart(2, "0");
  const minutes = `${timer.minutes}`.padStart(2, "0");

  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  min.textContent = minutes;
  sec.textContent = seconds;
}

function erase(button) {
  button.parentNode.parentNode.parentNode.remove();
}

window.addEventListener("load", () => {
  atualizar()
});

function concluir(id) {
  let tarefa_encontrada = listaTarefas.find((eachTarefa) => {
    return tarefa.id == id
  });
  tarefa_encontrada.concluida = true
  salvar()
  atualizar()
}