const cardsContainer = document.querySelectorAll('.CardsContainer');

const setUpTopCards = () => {
    for (let index = 0; index < cardsContainer.length; index++) {
        const cards = cardsContainer[index].querySelectorAll('.CardContainer');
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            card.style.top = (index + 1) * 10 + "px";
        }
    }

}
setUpTopCards();

window.addEventListener("scroll", () => {
    for (let index = 0; index < cardsContainer.length; index++) {
        const cards = cardsContainer[index].querySelectorAll('.CardContainer');
        var flag = true;
        if (flag) {
            flag = false;
            var data = {};
            data.Location = {};
            data.ToReduseBy = {};
            for (let index = 0; index < cards.length; index++) {
                const card = cards[index];
                const stickyTop = parseInt(window.getComputedStyle(card).top);
                const currentTop = card.getBoundingClientRect().top;
                data.Location[index] = currentTop - stickyTop;
                data.ToReduseBy[index] = 0;
            }

            for (let index = 0; index < cards.length; index++) {
                if (data.Location[index] <= 20) {
                    for (let j = index; j > -1; j--) {
                        data.ToReduseBy[j]++;
                    }
                }
            }

            for (let index = 0; index < cards.length; index++) {
                const card = cards[index];
                card.getElementsByClassName('CardInnerContainer')[0].style.transform = `scale(${1 - (data.ToReduseBy[index] * 0.05)})`;
            }

            setTimeout(() => {
                flag = true;
            }, 100)
        }
    }
});