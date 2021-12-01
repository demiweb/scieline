
let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (oldValue > newValue) {
        // console.log('scroll top?')
        document.querySelector('.header').classList.add('sticked');
        if (window.pageYOffset <= 30) {
            document.querySelector('.header').classList.remove('sticked');

        } else {

        }
    } else if (window.pageYOffset <= 30) {
        // console.log('weqweq')
        document.querySelector('.header').classList.remove('sticked');
    } else {
        // console.log('22222')
        if (window.pageYOffset > 30) {
            document.querySelector('.header').classList.add('sticked');
        }
    }


    oldValue = newValue;
}

let oldValue = 0;
let newValue = 0;
function scrollingSolution() {
    let block = document.querySelector('.our-solution');
    let windowOffSet = window.pageYOffset;

    let headerHeight = document.querySelector('.header').offsetHeight;
    let blockSld = document.querySelector('.block-slides');
    let result = Math.ceil(blockSld.scrollTop + blockSld.clientHeight) >= Math.ceil(blockSld.scrollHeight);
    let blockScrlT = blockSld.scrollTop;
    let blockOff = $(block).offset().top - headerHeight;
    let blockOffH = $(block).offset().top + block.offsetHeight - headerHeight;
    var targetPosition = {
            top: window.pageYOffset + block.getBoundingClientRect().top + 90,
            left: window.pageXOffset + block.getBoundingClientRect().left,
            right: window.pageXOffset + block.getBoundingClientRect().right,
            bottom: window.pageYOffset + block.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset + 40,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if(window.innerWidth < 1201) {

    } else {

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            if (windowOffSet >= blockOff) {

                if (result === true) {
                    // document.body.classList.add('fixed');

                } else {
                    // document.body.classList.remove('fixed');
                    // if (blockScrlT > 0) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".our-solution").offset().top - headerHeight
                    }, 0);
                    // } else {
                    //
                    // }
                }
            } else {

                if (result === true) {
                    // document.body.classList.add('fixed');

                } else {
                    // document.body.classList.remove('fixed');
                    if (blockScrlT > 0) {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".our-solution").offset().top - headerHeight
                        }, 20);
                    } else {

                    }


                }


            }
        }

    }

}
function detectBlockSolution() {
        if (document.querySelector('.our-solution')) {
            scrollingSolution();

        }
}





window.onscroll = function () {
    scrollFunction();
    // detectBlockSolution();
};
function scrollFunction() {
    checkScrollDir();
    // detectBlockSolution();
}
document.querySelector('header').onload = () => {
    // console.log(window.pageYOffset + ' pageoffset')
    if (window.pageYOffset > 30) {
        document.querySelector('.header').classList.add('sticked');
    }
    scrollFunction();
};


let subMenu = [...document.querySelectorAll('.menu-item-has-children > a')];

function openSubMenu() {
    if (subMenu.length) {
        subMenu.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.closest('.menu-item-has-children').classList.toggle('active');
            })
        })
    }
}
openSubMenu();

let searchIcon = [...document.querySelectorAll('.header-search__icon')];

function controlSearch() {
    if (searchIcon.length) {
        searchIcon.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-search').classList.add('active');

            })
        });
        let closeBtnSer = document.querySelector('.close-search');

        if (closeBtnSer) {
            closeBtnSer.addEventListener('click', () => {
                closeBtnSer.closest('.header-search').classList.remove('active');
            })
        }
    } else {

    }
}

controlSearch();

let burgerBtn = [...document.querySelectorAll('.burger-header')];

function controlBurger() {
    burgerBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            document.querySelector('.header').classList.toggle('opened');
            document.body.classList.toggle('no-scroll');
        })
    })
}
controlBurger();


let advanSlider = [...document.querySelectorAll('.js-slider.advantages')];

function goAdvSlider() {
    if (!advanSlider.length) {

    } else {
        advanSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.advantages__container');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

goAdvSlider();

let clientsList = [...document.querySelectorAll('.our-clients')];

function goClientsSlider() {
    if (!clientsList.length) {

    } else {
        clientsList.forEach((sld) => {
            let sldCont = sld.querySelector('.our-clients__slider');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },


            });
        })
    }
}

goClientsSlider();


let faqSingle = [...document.querySelectorAll('.faq-single')];
let faqAnswer = [...document.querySelectorAll('.faq-single__answer')];

function controlFaq () {
    if (faqSingle.length) {
        faqSingle.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('open')) {
                    btn.classList.remove('open');
                    faqAnswer[k].classList.remove('open');
                } else {
                    faqSingle.forEach((btn3) => {
                        btn3.classList.remove('open');

                    })
                    faqAnswer.forEach((btn3) => {
                        btn3.classList.remove('open');
                    })
                    btn.classList.add('open');
                    faqAnswer[k].classList.add('open');
                }

            })
        })
        faqAnswer.forEach((btn2, l) => {
            btn2.querySelector('.close').addEventListener('click', () => {
                btn2.classList.remove('open');
                faqSingle[l].classList.remove('open');
            })
        })
    }
}

controlFaq();



let mobileFaq = [...document.querySelectorAll('.faq')];

function faqSlider() {
    if (!mobileFaq.length) {

    } else {
        mobileFaq.forEach((sld) => {
            let sldCont = sld.querySelector('.faq-mobile');
            let sldNext = sld.querySelector('.btn-slides--next');
            let sldPrev = sld.querySelector('.btn-slides--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 20,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,

                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 20,

                    },
                },


            });
        })
    }
}

faqSlider();


let solutionMob = [...document.querySelectorAll('.solution-card')];
let solutionMobModal = [...document.querySelectorAll('.modals-solution-mobile .non-visible')];
let solutionModal = document.querySelector('.modals-solution-mobile');


function openMobileSolution() {
    if (solutionMob.length) {
        solutionMob.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                solutionModal.classList.add('open');
                solutionMobModal[k].classList.add('open');
                if (window.innerWidth < 768) {
                    document.body.classList.add('no-scroll');

                }
            })
        })
        solutionMobModal.forEach((btn2, k) => {
            let close = btn2.querySelector('.close');
            close.addEventListener('click', () => {
                solutionModal.classList.remove('open');
                btn2.classList.remove('open');
                document.body.classList.remove('no-scroll');

            })
        })
    }
}

openMobileSolution();


let openModal = [...document.querySelectorAll('.mod-req')];

function openModalReq() {
    if (openModal.length) {
        openModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.header').classList.remove('opened')
                document.querySelector('.burger-header ').classList.remove('open')
                document.querySelector('.modal-req').classList.add('active');

                document.body.classList.add('no-scroll');

            })
        })
    }
}

openModalReq();

let modalWindows = [...document.querySelectorAll('.modal-window')];


function controlModal() {
    if(modalWindows.length) {
        modalWindows.forEach((mdl) => {
            let back = mdl.querySelector('.backplate-mod');
            let close = mdl.querySelector('.close');
            back.addEventListener('click', () => {
                document.body.classList.remove('no-scroll');
                mdl.classList.remove('active');
            })
            close.addEventListener('click', () => {
                document.body.classList.remove('no-scroll');
                mdl.classList.remove('active');
            })
        })
    }
}

controlModal();




