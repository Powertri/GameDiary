document.querySelector("#salvar").addEventListener("click", cadastrar);

function cadastrar() {
  let titulo = document.querySelector("#titulo").value;
  let descricao = document.querySelector("#descricao").value;
  let pomodoros = document.querySelector("#pomodoro").value;

  const tarefa = {
    titulo,
    descricao,
    pomodoros,
  };

  document.querySelector("#tarefas").innerHTML += create(tarefa);
}

function create(tarefa) {
  return `<div class="col-12 col-md-6 col-lg-3">
                <div onclick="changeBackgroundColor(this.id)" id="card-${tarefa.titulo}" class="card">
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
                        <a href="#" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->`;
}

let isRunning = false;
let timer = {
  minutes: 1,
  seconds: 0,
};
let intervalSeconds = 1000;

document.getElementById("timer").addEventListener("click", startToRun);

var interval;

updateClock();

function changeBackgroundColor(id) {
    console.log(id);
    const card = document.getElementById(`card-${id}`);
    console.log(card.style.background);
    card.style.background = 'blue';
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
