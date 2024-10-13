function finalizar() {
    const horas = document.querySelector('input[name="horas"]:checked');
    const res = document.querySelector('div#res');

    if (horas) {
        const dependecia = horas.value;
        if (dependecia === "0") {
            res.innerHTML = `<h2> Baixa dependência em telas.</h2> <p>Seu tempo de tela está dentro do recomendado!</p>`;
        } else if (dependecia === "1") {
            res.innerHTML = `<h2>Dependência moderada.</h2> <p>Tente limitar o uso de telas para menos de 4 horas por dia.</p>`;
        } else if (dependecia === "2") {
            res.innerHTML = `<h2> Alta dependência em telas.</h2> <p>Cuidado, o uso excessivo pode prejudicar sua saúde.</p>`;
        } else if (dependecia === "3") {
            res.innerHTML = `<h2>Dependência em telas MUITO alta.</h2> <p>Você está usando telas por muito tempo! Tente reduzir para evitar problemas.</p>`;
        }
    } else {
        res.innerHTML = `<h2> Você não respondeu nada em "Quantas horas (em média) você utiliza as telas?"</h2>`;
    }
    const app = document.querySelector('input[name="controle"]:checked');
    const res2 = document.querySelector('div#res2');

    if (app) {
        const controle = app.value;
        if (controle === "0") {
            res2.innerHTML = `<p>Você já utiliza um aplicativo para controle</p>`;
        } else if (controle === "1") {
            res2.innerHTML = `<p>Use os seguintes aplicativos:</p> <ul><li> - Forest</li><li>- StayFocusd</li><li>- Freedom</li><li>- RescueTime</li></ul>`
        }
    } else {
        res2.innerHTML = `<p> Você não respondeu nada em "Você utiliza algum aplicativo de controle?"</p>`;
    }
    const atvds = document.querySelector('input[name="atrapalha"]:checked');
    const res3 = document.querySelector('div#res3');

    if (atvds) {
        const atrapalham = atvds.value
        if (atrapalham === "0") {
            res3.innerHTML = `<p>Use os aplicativos de controle para delimitar um tempo de tela (2 a 3 horas é o recomendado)</p>
                    <p>Para de usar os dispotivos no minímo 1 hora antes de ir deitar para dormir</p>`
        } else if (atrapalham === "1") {
            res3.innerHTML = `<p>Parabéns! Continue assim.</p>`
        }
    } else {
        res3.innerHTML = `<p> Você não respondeu nada em "Utilizar as telas atrapalham seu sono ou atividades diárias?"</p>`;
    }
    const tempo = document.querySelector('input[name="pausas"]:checked');
    const res4 = document.querySelector('div#res4');
    if (tempo) {
        const pausas = tempo.value;
        if (pausas === "0") {
            res4.innerHTML = `<p>Ótimo! Fazer pausas é necessario para um boa saúde ocular.</p>`
        } else if (pausas === "1") {
            res4.innerHTML = `<p>Fazer pausas a cada é importante, mais tente fazer com mais frequência.</p>`
        } else if (pausas === "2") {
            res4.innerHTML = `<p>Tente fazer pausas em um período mais curto de tempo.</p>`
        } else if (pausas === "3") {
            res4.innerHTML = `<p>Não fazer pausas pode prejudicial para sua saúde ocular! Comece fazendo pausas curtas de 10 a 20 minutos.</p>`
        }
    } else {
        res4.innerHTML = `<p> Você não respondeu nada em "Você costuma fazer pausas?"</p>`;
    }
    const fnld = document.querySelector('input[name="finalidade"]:checked');
    const res5 = document.querySelector('div#res5');
    if (fnld) {
        const finalidade = fnld.value;
        if (finalidade === "0") {
            res5.innerHTML = `<p> A tecnologia é uma ótima ferramenta para os estudos. Veja algumas dicas em: <a href="estudar-com-telas.html">Estudar com telas.</a></p>`;
        } else if (finalidade === "1") {
            res5.innerHTML = `<p>Trabalhar usando as telas por muito tempo pode ser cansativo, tente utilizar algumas dessas dicas: <ul><li>- Fazer pausas durante o dia de 10 a 20 minutos a cada 1 hora.</li><li>- Ajustar a iluminação e brilho da tela.</li><li>- Manter a distância adequada da tela.</li></p>`;
        } else if (finalidade === "2") {
            res5.innerHTML = `<p>Tente utilizar as telas para algo mais produtivo.</p>`;
        }
    } else {
        res5.innerHTML = `<p> Você não respondeu nada em "Para qual finalidade você mais utiliza as telas?"</p>`;
    }
    const rotina = document.querySelector('div#rotina');
    rotina.innerHTML = `<h3> Dicas que você pode incluir na sua rotina para diminuir o tempo nas telas:</h3> 
    <ul class = "periodos">
    <li><span>Manhã:</span>
    <ul><li> - Evite olhar o celular logo após acordar;</li><li> - Foque em algo físico (Meditação, alongamentos, Exercícios leves).</li>
    </ul></li>
    <li><span>Tarde:</span>
    <ul><li> - Fique um tempo de 30 minutos desconectado(Faça uma caminhada, leia um livro, converse com alguém, etc.)</li></ul></li>
    <li><span>Noite:</span>
    <ul><li>Desconexão total, sem telas pelo menos uma hora antes de dormir.</li><li>Práticas de relaxamento (Meditação ou leitura.)</li></ul></li>    
    </ul.>`
}
