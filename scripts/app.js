const playerMarkButtons = document.querySelectorAll('.MarkBtn');
const markO = 'O';
const markX = 'X';
let playerMark = markO;

playerMarkButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedClass = 'MarkBtn--selected';
        if (!this.classList.contains(selectedClass)) {
            const selectedBtn = document.querySelector(`.${selectedClass}`);
            selectedBtn.classList.remove(selectedClass);
            this.classList.add(selectedClass);
            playerMark = this.id == 'markBtn-X' ? markX : markO;
            console.log(playerMark);
        }
    });
});
