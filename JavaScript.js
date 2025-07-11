const buttons = document.querySelectorAll(".switch");
const stages = document.querySelectorAll(".stage");
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        stages[index].classList.toggle("open");
    });
});