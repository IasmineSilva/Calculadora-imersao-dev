//função: calcular média
function calcularMedia() {
    //pegar os elementos do html, deixar somente o digitado e converter de string para float
      var valorNota1 = document.getElementById("nota1");
      var valorElementoNota1 = valorNota1.value;
      var nota1Bimestre = parseFloat(valorElementoNota1);
    
      var valorNota2 = document.getElementById("nota2");
      var valorElementoNota2 = valorNota2.value;
      var nota2Bimestre = parseFloat(valorElementoNota2);
      
      var valorNota3 = document.getElementById("nota3");
      var valorElementoNota3 = valorNota3.value;
      var nota3Bimestre = parseFloat(valorElementoNota3);
      
      var valorNota4 = document.getElementById("nota4");
      var valorElementoNota4 = valorNota4.value;
      var nota4Bimestre = parseFloat(valorElementoNota4);
      
      //criando variavel com o calculo das notas
      var notaFixada = ((nota1Bimestre + nota2Bimestre + nota3Bimestre + nota4Bimestre)/4).toFixed(2);
      
      //variavel com respostas da conversão:
      var resposta = "Sua nota final é de: " + notaFixada;
      
      //teste de aprovação com nota final maior ou igual a 6.
      
      var resultado = ""
      if (notaFixada >=6){
        resultado = "YAY, você foi aprovado!"
      }else{
        resultado = "OOPS, você foi reprovado!"
      }
      
      //escrevendo no html
     document.getElementById("textoResposta").innerHTML = resposta;
     document.getElementById("valorResultado").innerHTML = resultado;
    }