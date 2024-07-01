// si o si se importa express en rutas
import express from 'express'
// si o si importar el controlador para luego usarlo en la ruta y llamar al controlador.get/path
import controller from '../controller/controller.js'

//crear route y exportarlo abajo
const route = express.Router()

// declaro las rutas get,puth path

 route.post("/agregarVoto",controller.postAgregarVoto)
route.get("/listarVotos",controller.getVotos)
route.get("/votosPorZona", controller.getVotosPorZona);
route.get("/votosGenerales",controller.getVotosGenerales)
route.get("/porcentajeVotos", controller.getPorcentajeVotos);
// aca exporto
export default route