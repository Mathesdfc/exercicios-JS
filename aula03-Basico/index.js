{
    /* 
    
     ----- EXERCÍCIOS -----

    a. Crie uma variável e armazene a seguinte string “Manipulando strings com JS”
    b. Utilize a função adequada para exibir um alerta com o conteúdo da variável todo em maiúsculo.
    c. Exiba no console do navegador apenas os 5 primeiros caracteres contidos na string.
    d. Exiba em um alerta a quantidade de caracteres que contém esta string.
    e. Crie uma variável e armazene a seguinte string “Vamos concatenar as duas strings”.
    f. Agora exiba no console o valor de ambas as strings concatenadas em uma única mensagem.

    */

    let armazenaTexto = 'Manipulando strings com JS';

    alert(armazenaTexto.toUpperCase());

    console.log(armazenaTexto.slice(0,4));

    alert(`Quantidade de caracteres é: ${armazenaTexto.length}`);

    let concatenaTextos = 'Vamos concatenar as duas strings';

    console.log(`${armazenaTexto} e ${concatenaTextos}`);

}

