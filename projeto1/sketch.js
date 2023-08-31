function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// função responsável por preparar e rodar um código por uma única vez

function setup() {

// função para criar um canvas (tela) de 400 pixels de largura, por 400 pixels de altura

createCanvas(400, 400);

}

// função responsável por desenhar na tela (canvas)

function draw() {

// função para pintar o fundo com a cor de código 220, um tipo de cinza

background(220);

}

function setup() {

createCanvas(600, 600);

}

function draw() {

background("white");

// função de desenho de um retângulo

// rect(posicao_x, posicao_y, largura, altura)

rect(0, 0, 100, 150)

}

function setup() {

createCanvas(600, 600);

}

function draw() {

background("blue");

stroke("blue") // alterando a cor da borda do desenho

fill("red") // alterando a cor do preenchimento do desenho

rect(100, 250, 100, 150)

}

function setup() {

createCanvas(600, 600);

background("white");

}

function draw() {

stroke("blue");

fill("red");

if(mouseIsPressed){

rect(mouseX, mouseY, 20, 35);

}

}

