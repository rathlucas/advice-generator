const adviceTitle = document.getElementById("advice-title");
const adviceText = document.getElementById("advice-text");
const url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
    let response = await fetch(url);
    let data = await response.json();

    return data.slip;
}

async function showAdvice() {
    let slip = await getAdvice();

    adviceTitle.textContent = `ADVICE #${slip.id}`;
    adviceText.textContent = `"${slip.advice}"`;

}

showAdvice();