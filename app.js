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
    },
    nando: {
        1: [
            { name: "Panca Piana con Bilanciere", sets: 4, rest: 180 },
            { name: "Panca Inc. 30° Manubri", sets: 3, rest: 120 },
            { name: "Dip Parallele", sets: 3, rest: 90 },
            { name: "Alzate Laterali", sets: 4, rest: 60 },
            { name: "French Press Bilanciere EZ", sets: 3, rest: 90 },
            { name: "Pushdown Tricipiti Corda", sets: 3, rest: 60 }
        ],
        2: [
            { name: "Trazioni / Lat Machine", sets: 4, rest: 120 },
            { name: "Rematore T-Bar", sets: 3, rest: 120 },
            { name: "Pulley Basso", sets: 3, rest: 90 },
            { name: "Alzate a 90° su Panca Inc", sets: 4, rest: 60 },
            { name: "Curl Bilanciere EZ", sets: 3, rest: 90 },
            { name: "Hammer Curl Manubri", sets: 3, rest: 60 },
            { name: "Wrist Curl Inverso", sets: 3, rest: 60 }
        ],
        3: [
            { name: "Hack Squat", sets: 4, rest: 150 },
            { name: "Leg Press 45°", sets: 3, rest: 90 },
            { name: "Leg Curl Seduto", sets: 4, rest: 90 },
            { name: "Polpacci", sets: 4, rest: 60 },
            { name: "Crunch Inverso Panca Inc", sets: 3, rest: 60 },
            { name: "Leg Raise Sbarra", sets: 3, rest: 60 }
        ],
        4: [
            { name: "Military Press Bilanciere", sets: 4, rest: 120 },
            { name: "Lat Machine Supina", sets: 3, rest: 90 },
            { name: "Spinte Panca Inc 45° Manubri", sets: 3, rest: 90 },
            { name: "Scrollate Manubri", sets: 4, rest: 60 },
            { name: "Alzate Laterali Cavi", sets: 4, rest: 60 },
            { name: "Superset: Curl Panca 45° + Extension Tricipiti Dietro Nuca", sets: 3, rest: 90 },
            { name: "Flessioni Collo", sets: 3, rest: 60 }
        ],
        5: [
            { name: "Leg Extension", sets: 4, rest: 60 },
            { name: "Leg Curl Sdraiato", sets: 4, rest: 90 },
            { name: "Affondi Manubri", sets: 3, rest: 90 },
            { name: "Polpacci 2 Gambe", sets: 4, rest: 60 },
            { name: "Bar Hang (Tenuta Sbarra)", sets: 3, rest: 60 },
            { name: "Crunch a Terra con Peso", sets: 3, rest: 60 }
        ]
    }
};

function selectPerson(person) {
    currentPerson = person;
    const container = document.getElementById('day-buttons');
    container.innerHTML = '';
    
    const titles = {
        giuseppe: ["Giorno 1: Upper Body", "Giorno 2: Lower Body & Core", "Giorno 3: Full Body & Cardio"],
        alfonso: ["Giorno 1: Upper Body", "Giorno 2: Lower Body & Core", "Giorno 3: Full Body & Cardio"],
        nando: ["Lunedì: Push", "Martedì: Pull", "Mercoledì: Legs & Core", "Giovedì: Upper & Collo", "Venerdì: Lower, Core & Avambracci"]
    };

    titles[person].forEach((title, index) => {
        const btn = document.createElement('button');
        btn.onclick = () => selectDay(index + 1);
        btn.textContent = title;
        container.appendChild(btn);
    });

    showScreen('screen-day');
}
let currentPerson = '';
let currentDay = 1;
let currentExerciseState = [];

// Variabili Timer
let activeTimer;
let timeRemaining = 0;
let isPaused = false;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
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
        
        // Genera i cerchi per le serie
        let circlesHTML = '<div class="sets-indicator">';
        for(let i = 0; i < ex.sets; i++) {
            circlesHTML += `<div id="circle-${index}-${i}" class="set-circle"></div>`;
        }
        circlesHTML += '</div>';
        
        card.innerHTML = `
            <h3>${index + 1}. ${ex.name}</h3>
            ${circlesHTML}
            ${ex.rest > 0 ? `<button class="primary-action" onclick="completeSet(${index})">Registra Serie & Recupera (${ex.rest}s)</button>` : `<button class="primary-action" onclick="completeSet(${index})">Completa</button>`}
        `;
        list.appendChild(card);
    });
}

function completeSet(index) {
    let ex = currentExerciseState[index];
    if (ex.completedSets < ex.sets) {
        // Colora il cerchio corrispondente
        document.getElementById(`circle-${index}-${ex.completedSets}`).classList.add('filled');
        ex.completedSets++;
        
        if (ex.completedSets === ex.sets) {
            document.getElementById(`ex-${index}`).classList.add('completed');
        }

        if (ex.rest > 0 && ex.completedSets < ex.sets) {
            startTimer(ex.rest);
        }
    }
}

// Logica Timer a Schermo Intero
function startTimer(seconds) {
    clearInterval(activeTimer);
    timeRemaining = seconds;
    isPaused = false;
    
    document.getElementById('timer-fullscreen').classList.add('active');
    document.getElementById('btn-pause').textContent = "Pausa";
    updateTimerDisplay();
    
    activeTimer = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            updateTimerDisplay();
            
            if (timeRemaining <= 0) {
                endTimer();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const display = document.getElementById('timer-time');
    const mins = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
    const secs = String(timeRemaining % 60).padStart(2, '0');
    display.textContent = `${mins}:${secs}`;
}

function togglePause() {
    isPaused = !isPaused;
    document.getElementById('btn-pause').textContent = isPaused ? "Riprendi" : "Pausa";
}

function cancelTimer() {
    endTimer();
}

function endTimer() {
    clearInterval(activeTimer);
    document.getElementById('timer-fullscreen').classList.remove('active');
    if(timeRemaining <= 0 && navigator.vibrate) navigator.vibrate([200, 100, 200]);
}
