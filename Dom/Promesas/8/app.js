//Crea una función llamada translate que tome un texto y un idioma de destino como argumentos, y devuelva una promesa que resuelva con el texto traducido al idioma de destino (puedes simular la respuesta de una API externa usando getData).

function translate(texto, idioma) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idioma === "español") {
          const traduccion = "Mente sana en cuerpo sano.";
          resolve(traduccion);
        } else {
          reject("Error: Idioma no compatible");
        }
      }, 2000);
    });
  }
  
  translate("Mens sana in corpore sano", "español")
    .then((traduccion) => {
      console.log(traduccion);
    })
    .catch((error) => {
      console.error(error);
    });
  



















/* function translate(texto, idioma){


    return new Promise((resolve, reject) => {
        let texto = 'Mens sana in corpore sano';
        let idioma = español 
        if(idioma == español) {
        console.log('Mente sana en cuerpo sano».')
    }else{
        console.log(error);
    }
        setTimeout(() => {
            resolve(texto, idioma);
            reject(error);
        }
        ), 2000
    })
}

translate() 
    .then((español)  => {
        console.log('Mente sana en cuerpo sano».', español)
      })
    .catch((error) => {
        console.error("und");
      });
 */


