//Crea un servidor HTTP básico que responda con un mensaje cuando se haga una solicitud GET.

const http = require("http");

const server = http.createServer((req, res) => {
  //Objeto de solicitud (request) y el objeto de respuesta (response) correspondientes a una solicitud HTTP recibida por el servidor.
  if (req.method === "GET" && req.url === "/saludo") {
    //Para verificar si la solicitud es de tipo GET y y req.url para verificar si la solicitud está dirigida a la ruta.
    res.statusCode = 200; //Permite establecer el código de estado de la respuesta (200).
    res.setHeader("Content-Type", "text/plain"); //Se utiliza para establecer los encabezados de la respuesta.
    res.end("¡Hola! Esta es una respuesta a una solicitud GET en saludo\n hola "); //Enviar respuesta.
  } else {
    res.statusCode = 404; // Estado HTTP 404: No encontrado
    res.setHeader("Content-Type", "text/plain");
    res.end("Ruta no encontrada\n");
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`//http://localhost:3001/saludo ${port}`);
});


