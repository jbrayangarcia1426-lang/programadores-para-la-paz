const express = require('express');
const app = express();

app.use(express.json());

app.post('/incidencia', (req, res) => {

      const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

    res.json({
    mensaje: "incidencia registrada",
    tipo: tipo,
    descripcion: descripcion 
  });

  });
 
  app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
 