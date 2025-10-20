const content = "Welcome to my page!";
const text = document.querySelector(".title h1");
let textIdx = 0;

//타이핑 하는듯한 효과의 함수
function typing() {

    //타이핑 효과를 위해 content에 글자를 0번째 부터 시작해서 하나씩 오르는걸 txt 함수에 넣는다
    let txt = content[textIdx++];

    //innerHTML 은 text 함수로 불러온 HTML이나 XML을 불러옴
    //txt의 0번째부터 증가하는 함수를 text.innerHTML로 불러온 HTML에 똑같이 더하면서 적용
    text.innerHTML += txt;

    if (textIdx > content.length) {
        //HTML의 텍스트 요소를 가져오는 textContent 속성
        text.textContent = "";

        //함수 실행시 조건문에서 모든 타이핑을 다 치게되면 더이상 칠게 없으므로 0번째로 초기화 시켜줘야한다
        textIdx = 0;
    }
}

setInterval(typing, 200)

window.addEventListener("load", () => {
    const loading = document.querySelector(".loading-container");

    // 2초 후에 로딩 화면 숨기기
    setTimeout(() => {
        loading.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "instant" });
    }, 2000);
});

const sections = document.querySelectorAll("section");
const colors = [
    "#009d9d", // 가장 어두운 청색
    "#00b1b1",
    "#00c5c5",
    "#00d9d9",
    "#00eded"  // 가장 밝은 청색
];

const body = document.body;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + window.innerHeight / 2;
    let index = 0;

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
            index = i;
        }
    });
    body.style.backgroundColor = colors[index];
});

let aboutProfile = document.querySelector(".img_box");
let aboutMajor = document.querySelector(".img_box2");
let aboutNickname = document.querySelector(".img_box3");
let aboutMbti = document.querySelector(".img_box4");
let aboutKeyword = document.querySelector(".img_box5");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);
    if (value < 400) {
        aboutProfile.style.animation = "about_backslide 1s ease-out forwards";
        aboutMajor.style.animation = "about_backslide 1s ease-out forwards";
        aboutNickname.style.animation = "about_backslide 1s ease-out forwards";
        aboutMbti.style.animation = "about_backslide 1s ease-out forwards";
        aboutKeyword.style.animation = "about_backslide 1s ease-out forwards";
    } else {
        aboutProfile.style.animation = "about_slide 1s ease-out";
        aboutMajor.style.animation = "about_slide 1.3s ease-out";
        aboutNickname.style.animation = "about_slide 1.6s ease-out";
        aboutMbti.style.animation = "about_slide 1.3s ease-out";
        aboutKeyword.style.animation = "about_slide 1.6s ease-out";
    }
})

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.perv');
const nextBtn = document.querySelector('.next');

const slideWidth = 330;
const VisibleSlides = 3;
let currentIdx = 0;

const MaxIdx = slide.length - VisibleSlides;

nextBtn.addEventListener('click', () => {
    if (currentIdx < MaxIdx) {
        currentIdx++;
        slides.style.left = `${-currentIdx * slideWidth}px`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) {
        currentIdx--;
        slides.style.left = `${-currentIdx * slideWidth}px`;
    }
});