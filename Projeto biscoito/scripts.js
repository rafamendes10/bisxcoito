const FirstScreen = document.querySelector('.screen1')
const SecondScreen = document.querySelector('.screen2')
const TextCookie = document.querySelector('.screen2 p')
const Reload = document.querySelector('.screen2 button')

const phrases =[
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
  "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
  "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
  "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho."
]








let fsd = -1
 

function HandleClick (){
  FirstScreen.classList.add('hide')
  SecondScreen.classList.remove('hide')

  fsd++
  console.log(fsd)
  const lucky = phrases[fsd]
  TextCookie.innerText = lucky

}

function BTN (){
  SecondScreen.classList.add('hide')
  FirstScreen.classList.remove('hide')
}


