const workouts = {
    giuseppe: {
        1: [
            { name: "Piegamenti (ginocchia a terra)", sets: 3, rest: 90 },
            { name: "Lat Machine Presa Prona", sets: 3, rest: 90 },
            { name: "Rematore con Manubrio", sets: 3, rest: 90 },
            { name: "Chest Press a Macchina", sets: 3, rest: 90 },
            { name: "Pushdown Tricipiti ai Cavi", sets: 3, rest: 60 }
        ],
        2: [
            { name: "Box Squat a Corpo Libero", sets: 4, rest: 90 },
            { name: "Leg Press 45°", sets: 3, rest: 90 },
            { name: "Leg Curl Seduto", sets: 3, rest: 60 },
            { name: "Calf in Piedi", sets: 3, rest: 60 },
            { name: "Plank sui gomiti", sets: 4, rest: 60 }
        ],
        3: [
            { name: "Stacchi Rumeni con Manubri", sets: 3, rest: 90 },
            { name: "Alzate Laterali con Manubri", sets: 3, rest: 60 },
            { name: "Pulley Basso", sets: 3, rest: 90 },
            { name: "Affondi Indietro", sets: 3, rest: 90 },
            { name: "Cardio (Vogatore o Cyclette)", sets: 1, rest: 0 }
        ]
    },
    alfonso: {
        1: [
            { name: "Chest Press a Macchina", sets: 3, rest: 90 },
            { name: "Lat Machine Presa Prona", sets: 3, rest: 90 },
            { name: "Rematore con Manubrio", sets: 3, rest: 90 },
            { name: "Alzate Laterali con Manubri", sets: 3, rest: 60 },
            { name: "Pushdown Tricipiti ai Cavi", sets: 3, rest: 60 }
        ],
        2: [
            { name: "Goblet Squat con Manubrio", sets: 4, rest: 90 },
            { name: "Leg Press 45°", sets: 3, rest: 90 },
            { name: "Leg Curl Seduto", sets: 3, rest: 60 },
            { name: "Calf in Piedi", sets: 3, rest: 60 },
            { name: "Plank sui gomiti", sets: 3, rest: 60 }
        ],
        3: [
            { name: "Affondi con Manubri", sets: 3, rest: 90 },
            { name: "Pulley Basso", sets: 3, rest: 90 },
            { name: "Piegamenti (ginocchia a terra)", sets: 3, rest: 90 },
            { name: "Stacco Romeno con Manubri", sets: 3, rest: 90 },
            { name: "Cardio (Tapis Roulant)", sets: 1, rest: 0 }
        ]
    }
};

let currentPerson = '';
let currentDay = 1;
let activeTimer;
let currentExerciseState = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectPerson(person) {
    currentPerson = person;
    showScreen('screen-day');
}

function selectDay(day) {
    currentDay = day;
    loadWorkout();
    showScreen('screen-workout');
}

function loadWorkout() {
    const list = document.getElementById('workout-list');
    list.innerHTML = '';
    const nameStr = currentPerson.charAt(0).toUpperCase() + currentPerson.slice(1);
    document.getElementById('workout-title').textContent = `${nameStr} - Giorno ${currentDay}`;

    const routine = workouts[currentPerson][currentDay];
    currentExerciseState = routine.map(ex => ({ ...ex, completedSets: 0 }));

    currentExerciseState.forEach((ex, index) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.id = `ex-${index}`;
        
        card.innerHTML = `
            <h3>${index + 1}. ${ex.name}</h3>
            <p>Serie: <span id="sets-${index}">0</span> / ${ex.sets}</p>
            ${ex.rest > 0 ? `<button class="primary-action" onclick="completeSet(${index})">Registra Serie & Avvia Recupero (${ex.rest}s)</button>` : `<button class="primary-action" onclick="completeSet(${index})">Completa</button>`}
        `;
        list.appendChild(card);
    });
}

function completeSet(index) {
    let ex = currentExerciseState[index];
    if (ex.completedSets < ex.sets) {
        ex.completedSets++;
        document.getElementById(`sets-${index}`).textContent = ex.completedSets;
        
        if (ex.completedSets === ex.sets) {
            document.getElementById(`ex-${index}`).classList.add('completed');
        }

        if (ex.rest > 0 && ex.completedSets < ex.sets) {
            startTimer(ex.rest);
        }
    }
}

function startTimer(seconds) {
    clearInterval(activeTimer);
    const timerUI = document.getElementById('global-timer');
    const display = document.getElementById('time-display');
    timerUI.style.display = 'block';
    
    let time = seconds;
    
    activeTimer = setInterval(() => {
        const mins = String(Math.floor(time / 60)).padStart(2, '0');
        const secs = String(time % 60).padStart(2, '0');
        display.textContent = `${mins}:${secs}`;
        
        if (time <= 0) {
            clearInterval(activeTimer);
            timerUI.style.display = 'none';
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        }
        time--;
    }, 1000);
}
