 let númeroSecreto = Math.floor(Math.ramdom()*10)+1;
 let númeroUsuario = 0;
 let intentos = 1;
 //let palabreVeces = 'vez';
 let maximosIntentos = 3;

 while (númeroUsuario != númeroSecreto) {
   númeroUsuario = prompt("me indicas un número entre 1 y 10 por favor:");


   console.log(númeroSecreto);
   console.log(númeroUsuario);
   if (númeroUsuario == númeroSecreto) {
      //Acertamos, fue verdadera la condicion
      alert(`Acertaste, el número es: ${númemeroUsuario}. Lo hicistre en ${intentos== 1 ? 'vez' : 'veces'}`);
   } else {
      if (númeroUsuario > númeroScreto) {
         alert('El número secreto es menor');
      } else {
         alert('El número secreto ees mayor');
      }
      //incrementamos el contador cuando mo acierta
      //intentos = intentos + 1;
      //intentos += 1;
      intentos++;

      //palabraVeces = 'veces';
      if (intentos > maximosIntentos) {
         alert (`llegaste al número maximo de ${maximosIntentos} intentos`);
         break;
      }
      //La condicion no se cumplio
      alert('lo siento, no acertaste el número');
   }
 }