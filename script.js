const texto_inicial = document.getElementById("texto_inicial");

const botoescrip = document.getElementById("botoescrip");

const botoesdescrip = document.getElementById("botoesdescrip");

const botoescopiar = document.getElementById("botoescopiar");

const mensagem1 = document.getElementById("mensagem1");

const mensagem_1 = document.getElementById("mensagem_1");

const boneco = document.getElementById("boneco");

const direita = document.getElementById("direita");

let  remplazar = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

botoescrip.addEventListener('click', () => {

	const texto = texto_inicial.value.toLowerCase();
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
	const textopronto = encript(texto);
    mensagem1.innerHTML = textopronto;
    boneco.style.display = "none";
    mensagem.value= "";
    mensagem_1.style.display = "none";
    direita.classList.add("ajustar");
    mensagem1.classList.add("ajustar");
})

botoesdescrip.addEventListener('click', () => {
    const texto = texto_inicial.value.toLowerCase();
    function desencriptar(newtext) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newtext.includes(remplazar[i][1])) {
                newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newtext;
    };
    const textopronto1 = desencriptar(texto);
    mensagem1.innerHTML = textopronto1;
    boneco.style.display = "none";
    mensagem1.value= "";
    mensagem_1.style.display = "none";
    direita.classList.add("ajustar");
    mensagem1.classList.add("ajustar");
})

