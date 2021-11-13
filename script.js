const calcular = document.getElementById('calcular');


function financiamento () {
    const renda = document.getElementById('renda').value;
    const bem = document.getElementById('bem').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (renda !== '' && bem !== '' && entrada !== '' && juros !== '' && parcelas !== '') {

        const valor_financiado = bem - entrada;

        const eq1 = (((1+juros)**parcelas)*juros);

        const eq2 = (((1+juros)**parcelas)-1);
        
        const valor_mensal = ((valor_financiado*(eq1/eq2))/parcelas).toFixed(2);

        const aprovacao = (renda*0.30);

        resultado.textContent = `Olá! O valor das parcelas será de ${valor_mensal}.` 
        if (aprovacao < valor_mensal){
            resultado.textContent = `Olá! O valor das parcelas será de ${valor_mensal}, seu financiamento será recusado.`
        }else{
            resultado.textContent = `Olá! O valor das parcelas será de ${valor_mensal}, seu financiamento será aprovado.`
        }
    }else {
        resultado.textContent = 'Para calcular seu pace , preencha todos os campos.';
    }

}
calcular.addEventListener('click', financiamento);