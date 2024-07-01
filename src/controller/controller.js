import service from "../services/services.js";

const distritosPermitidos = ["zona1", "zona2", "zona3", "zona4"];
const candidatosPermitidos = [
  "candidatoA",
  "candidatoB",
  "candidatoC",
  "enblanco",
];

const postAgregarVoto = async (req, res) => {
  try {
    const { distrito, candidato } = req.body;
    const esDistritoValido = distritosPermitidos.includes(distrito);
    const esCandidatoValido = candidatosPermitidos.includes(candidato);

    if (!esDistritoValido && !esCandidatoValido) {
      res.send("zona no correspondiente y candidato no válido");
    } else if (!esDistritoValido) {
      res.send("zona no correspondiente");
    } else if (!esCandidatoValido) {
      res.send("candidato no válido");
    } else {
      await service.postAgregarVoto(req.body);
      res.send("voto cargado");
    }
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Lista vacía" });
  }
};

const getVotos = async (req, res) => {
  try {
    const lista = await service.getVotos();
    res.json(lista);
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Lista vacía" });
  }
};

const getVotosPorZona = async (req, res) => {
    try {
      const votosPorZona = await service.getVotosPorZona();
      res.json(votosPorZona);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los votos por zona" });
    }
  };

  const getVotosGenerales = async (req,res) => {
    const votosGenerales = await service.getVotosGenerales()
    res.send(votosGenerales)
  }

  const getPorcentajeVotos = async (req, res) => {
    try {
      const porcentajeVotos = await service.getPorcentajeVotos();
      res.json(porcentajeVotos);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el porcentaje de votos" });
    }
  };

export default {
  postAgregarVoto,
  getVotos,
  getVotosPorZona,
  getVotosGenerales,
  getPorcentajeVotos
};
