
const input = document.querySelector('[autocomplete=one-time-code');
function showAlert() {
    Swal.fire ({
        title: 'Uspeh',
        icon: 'success',
        text: 'Bravo',
        confirmButtonText: 'OK'
    });
}



let pin = "";
let timer = 30;


function openPinOverlay() {
    document.getElementById("pin-overlay").style.display = "flex";
    pin = "";
    updatePinDisplay();
    resetTimer();
}

function updatePinDisplay() {
    document.getElementById("entered-pin").value = pin;
    input.style.setProperty('--_otp-digit', input.selectionStart)
}

function enterDigit(digit) {
    if (pin.length < 6) {
        pin += digit;
        updatePinDisplay();
        document.querySelectorAll(".keypad button").forEach(btn => btn.classList.remove("active"));

        // Dodaj active klasu samo na kliknut broj
        document.querySelector(`.keypad button:nth-child(${digit === 0 ? 11 : digit})`).classList.add("active");
    }
}

function deleteDigit() {
    pin = pin.slice(0, -1);
    updatePinDisplay();
}

function submitPin() {
    // alert("Uneti PIN: " + pin);
    Swal.fire ({
        title: 'PIN je ispravan',
        icon: 'success',
        text: pin,
        confirmButtonText: 'OK'
    });
    closeOverlay()
}

function closeOverlay() {
    document.getElementById("pin-overlay").style.display = "none";
    pin = "";
    updatePinDisplay();
}

function startTimer() {
    let interval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = timer;
        if (timer === 0) {
            clearInterval(interval);
            closeOverlay();
        }
    }, 1000);
}


function resetTimer() {
    let countdown = 300;
    document.getElementById("timer").innerText = countdown;
    clearInterval(timer);
    timer = setInterval(() => {
        countdown--;
        document.getElementById("timer").innerText = countdown;
        if (countdown === 0) {
            clearInterval(timer);
            closeOverlay();
        }
    }, 1000);
}


function takePackage() {
    let home = document.getElementById("home");
    let couirer = document.getElementById("couirer");
    
    if (home.style.display === "contents") {
        home.style.display = "none";
        couirer.style.display = "contents";
    } else {
        home.style.display = "contents";
        couirer.style.display = "none";
    }
}


function showSelection() {
    let languageSelect = document.getElementById("language");
    let selectedOption = languageSelect.options[languageSelect.selectedIndex];
    
    Swal.fire({
        title: 'Izabrali ste:',
        text: selectedOption.text,
        icon: 'success'
    });
}

input.addEventListener('input', () => input.style.setProperty('--_otp-digit', input.selectionStart));