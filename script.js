document.querySelector("#salvar").addEventListener("click", cadastrar);
const listaTarefa = [];

function cadastrar() {
  const modal = bootstrap.Modal.getInstance(document.querySelector("#registerTask"));
  let titulo = document.querySelector("#titulo").value;
  let descricao = document.querySelector("#descricao").value;
  let pomodoros = document.querySelector("#pomodoro").value;

  const tarefa = {
    titulo,
    descricao,
    pomodoros,
  };
  if (tarefa.titulo.length == 0){
    document.querySelector('#titulo').classList.add("is-invalid");
  }
  listaTarefa.push(tarefa);

  document.querySelector("#tarefas").innerHTML += create(tarefa);


  localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));
  modal.hide()
}

function create(tarefa) {
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
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <a href="#" onclick="erase(this)" class="btn btn-danger">
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
    card.style.backgroundColor = '#d3d4d9';
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
  const tarefas = JSON.parse(localStorage.getItem('listaTarefa'))
  tarefas.forEach(each => {
    document.querySelector("#tarefas").innerHTML += create(each);
  
  });
});
