

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var save_value = 0;
var save_log_1 = 0;

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sojubox() {
    screen.value = (screen.value)*30;
}

function beerbox() {
    screen.value = (screen.value)*20;
}

function save_i() {
    save_value = screen.value;
    screen.value = "";
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function use_i() {
    screen.value = (screen.value)*1 + (save_value)*1;
    save_value = 0;
}

function beer() {
    screen.value = (screen.value)*130;
}

function soju() {
    screen.value = (screen.value)*100;
}

function save_log() {
    
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}