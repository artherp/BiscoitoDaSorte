const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fortuneCookie = document.querySelector('#fortuneCookie')
const tryAgain = document.querySelector('#tryAgain')

const fortune = [
    "Você tem poder sobre sua mente, não sobre eventos externos. Perceba isso, e encontrará força. - Marco Aurélio",
    "A felicidade da tua vida depende da qualidade dos teus pensamentos. - Marco Aurélio",
    "Muito pouco é necessário para uma vida feliz; está tudo dentro de você, em sua maneira de pensar. - Marco Aurélio",
    "A alma se tinge com as cores dos pensamentos. - Marco Aurélio",
    "Tudo o que ouvimos é uma opinião, não um fato. Tudo o que vemos é uma perspectiva, não a verdade. - Marco Aurélio",
    "A melhor vingança é ser diferente daquele que causou o dano. - Marco Aurélio",
    "A mente adapta e converte para seus próprios fins o obstáculo à nossa atuação. - Marco Aurélio",
    "Aproveite a vida com as pessoas que você ama. - Marco Aurélio",
    "Perder o amanhã em preocupações com o futuro não faz sentido. Fique com o presente. - Marco Aurélio",
    "O tempo é um rio; você não pode tocar a mesma água duas vezes, pois a corrente que passou não passará novamente. - Marco Aurélio"
  ];

  tryAgain.addEventListener('click', handleResetClick)
  fortuneCookie.addEventListener('click', handleTryClick)
  document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        handleTryClick()
    } else {
        handleResetClick()
    }
  })

  function handleTryClick(e) {
    toggleScreen()
    pickFortune()
  }

  function handleResetClick() {
    toggleScreen()
  }

  function pickFortune() {
    let allFortunes = fortune.length;

    for (let i = allFortunes - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [fortune[i], fortune[j]] = [fortune[j], fortune[i]];
    }

    let seed = Date.now();
    let randomNumber = Math.floor((Math.random() + seed % 1) * allFortunes) % allFortunes;

    screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`;
}


  function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
  }