function recomendacao() {
    const hrs = document.querySelector('input#horas');
    const res = document.querySelector('div#resultado');
    if(hrs){
    const horas = Number(hrs.value);
    if(horas > 0 && horas <= 4){
    res.innerHTML = `<p>Você utiliza as telas em média <strong>${horas} HORAS</strong> por dia.</p>`;
        } else if(horas >= 5 && horas <= 14 ){
            res.innerHTML = `<p>Cuidado! a sua média diária de uso de telas é de <strong>${horas} HORAS</strong>, é considerado muito tempo.</p>`
        } else if(horas <= 0 || horas > 14){
            res.innerHTML = `<p><strong>A quantidade de horas é inválida<strong></p>`; return;
        }
    }
    const atvds = document.querySelector('input[name="atvs"]:checked');
    if (atvds) {
        const atividades = atvds.value;
        if (atividades === "0") {
            res.innerHTML += `<p>Ótimo! A tecnologia é uma ferramenta muito boa para auxiliar nos seus estudos. Saiba mais em <a href="estudar-com-telas.html">Estudar com Telas</a></p>`;
        } else if (atividades === "1") {
            res.innerHTML += `<p>As telas são ferramentas comuns de trabalho. No entanto, apesar da praticidade tecnológica, a exposição excessiva às telas causa preocupações relacionadas à <strong>saúde ocular</strong></p>
            <h3>Como evitar os problemas na visão?</h3>
            <p>Algumas práticas recomendadas por profissionais:</p>
            <ul>
                <li>● Manter a tela na altura dos olhos e afastada do rosto;</li>
                <li>● Piscar com frequência;</li>
                <li>● Fazer algumas pausas ao longo do dia;</li>
                <li>● Usar o óculos de maneira adequada (caso utilize por recomendação oftalmológica).</li>
            </ul>`;
        } else if (atividades === "2") {
            res.innerHTML += `<p>A tecnologia é uma ótima ferramenta para entretenimento, mas é necessário utilizá-la com bom senso. Algumas maneiras construtivas de aproveitar as telas:</p> 
            <ul>
                <li><h4>● Estudar:</h4><p>Explore cursos onlines e materiais educativos.</p></li>
                <li><h4>● Trabalhar:</h4><p>Utilize ferramentas digitais para aumentar sua produtividade e sua carreira profissional</p></li>
                <li><h4>● Aprender algo novo:</h4><p>Descubra hobbies ou habilidades, como programar ou cozinhar</p></li>
                <li><h4>● Estimule sua criatividade:</h4><p>Use aplicativos para expressar sua criatividade, como arte, escrita ou música.</p></li>
            </ul>`;
        }
    } else {
        res.innerHTML += `<p>Parece que você deixou a caixa <strong>"Para quais atividades você mais utiliza as telas?"</strong> vazia.</p>`;
    }

    const prt = document.querySelector('input[name="protecao"]:checked');
    if (prt) {
        const protecao = prt.value;
        if (protecao === "0") {
            res.innerHTML += `<p>Você já utiliza proteção ocular. Caso queira saber mais <a href="https://hopr.com.br/uso-prolongado-de-telas-como-cuidar-da-saude-dos-seus-olhos/.">Acesse Aqui!</a></p>`;
        } else if (protecao === "1") {
            res.innerHTML += `<p>Cuidado! Utilizar alguma proteção é fundamental para sua saúde ocular.</p>
            <ul>
                <li> Utilize filtros de luz azul; </li>
                <li><h4> Visite um oftalmologista </h4><p>É importante para verificar se o uso de óculos é necessário, o que pode trazer conforto para a visão.</p></li>
            </ul>`;
        }
    } else {
        res.innerHTML += `<p>Parece que você deixou a caixa <strong>"Você utiliza alguma proteção ocular?"</strong> vazia.</p>`;
    }

    const atrp = document.querySelector('input[name="atrapalha"]:checked');
    if (atrp) {
        const atrapalha = atrp.value;
        if (atrapalha === "0") {
            res.innerHTML += `<p>Se o uso das telas atrapalha nas suas atividades diárias, considere seguir as seguintes recomendações:</p>
            <ul>
                <li>Utilizar aplicativos para controle e estabeleça limites. Exemplo:
                    <ul>
                        <li><strong>- Forest:</strong> Ajuda a focar e gerenciar o tempo, plantando árvores virtuais enquanto você não usa o celular.</li>
                        <li><strong>- RescueTime:</strong> Rastreia o tempo gasto em aplicativos e sites, oferecendo relatórios detalhados sobre sua produtividade.</li>
                        <li><strong>- Stay Focused:</strong> Bloqueia app ou sites que consomem muito tempo.</li>   
                    </ul>
                </li>
                <li>- Estabeleça zonas livres de celular;</li>
                <li>- Desative as notificações;</li>
                <li>- Pare de utilizar as telas 1 hora antes de dormir e evite elas logo após acordar.</li>
            </ul>`;
        } else if (atrapalha === "1") {
            res.innerHTML += `<p>Ótimo! Se o uso de telas não atrapalha nas suas atividades diárias continue assim. Quer ver mais algumas dicas? <a href="https://www.cnnbrasil.com.br/saude/conheca-12-maneiras-de-diminuir-o-tempo-de-uso-do-celular/">Veja Aqui!</a></p>`;
        }
    } else {
        res.innerHTML += `<p>Parece que você deixou a caixa <strong>"O uso das telas atrapalha suas atividades diárias?"</strong> vazia.</p>`;
    }

    res.innerHTML += `<p><strong>LEMBRE-SE!</strong> O que importa não é necessariamente a <span>quantidade</span> de tempo em que você passa em frente às telas, mas sim a <span>qualidade</span> de como você utiliza elas. Foque sempre na qualidade do tempo de tela!</p>`;
}
