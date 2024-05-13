document.querySelector("#atv-1").addEventListener("click", atividade1)

function atividade1() {
    html.innerHTML = ""

    const A = 12
    const B = 18

    html.innerText += A - B
    html.innerText += 2 * A + 3 * B
    html.innerText += A * B

    console.log(`${[A, B].sort((a, b) => a - b)}`)
}