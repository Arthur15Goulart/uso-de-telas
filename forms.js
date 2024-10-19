function recomendacao(){
    const hrs = document.querySelector('input#horas');
    const res = document.querySelector('div#resultado');
    const horas = Number(hrs.value);
    res.innerHTML = `<p>Você utiliza as telas em média <strong>${horas} HORAS</strong> por dia.</p>`;
    const atvds = document.querySelector('input#atvs');
    const atividades  = atvds.value;
    if(atividades === "0"){
        res.innerHTML += `<p>Ótimo! A tecnologia é uma ferramenta muito boa para auxíliar nos seus estudos. Saiba mais em <a href="estudar-com-telas.html">Estudar com Telas</a></p>`
    }
}
