
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var save_value = 0;
var save_log_1 = 0;
var result_before = 0;
const $div = document.getElementById('data');


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
        if (btntext == 'x'){

        }
        screen.value += btntext;
    });
}

function Popup() {
    window.open("index copy.html", "a", "width=1400, height=300, left=100, top=50");
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
    screenbtn1 = screen.value;
    window.close("index copy.html", "a", "width=1400, height=300, left=100, top=50");
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
    screen.value = 0;
    screen.value = result_before;
    
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
    if (screen.value == "NaN"){
        screen.value = "";
    }
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function result() {
    result_before = screen.value;
    screen.value = eval(screen.value);
    screenbtn1 = result_before;
    $div.setAttribute('value',result_before );
}

function download(dataURL, filename) {
    const blob = dataURLToBlob(dataURL);
    const url = window.URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = filename;
  
    document.body.appendChild(a);
    a.click();
  
    window.URL.revokeObjectURL(url);
  }

function result_log(){
      const dataURL = signaturePad.toDataURL();
      download(dataURL, "signature.png");
    }