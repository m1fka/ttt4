let goLoading = 0;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const runner = document.querySelector('.on-off .runner');


headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        runner.classList.toggle('open_on-off');

        if (goLoading == 0) {

            goLoading = 1;
        }
        else {

            goLoading = 0;
        }
        setTimeout(() => {
            if (goLoading == 1) {
                setTimeout(() => {
                    if (goLoading == 1) {
                        setTimeout(() => {
                            if (goLoading == 1) {
                                changePage()
                            }
                        }, 700)
                    }
                }, 700)
            }
        }, 700)

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }
})

function changePage() {
    window.location.href = 'index.html'
}



// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');

// burger.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     menu.classList.toggle('active');
// });



// аватар телеграма

const avatarTelegram = document.querySelector('.avatarTelegram img');
window.onload = () =>{
    avatarTelegram.src = localStorage.getItem('avatarTelegram');
}

