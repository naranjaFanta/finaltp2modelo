import model from '../model/model.js'

const postAgregarVoto = async (voto) => {
    const votos = await model.postAgregarVoto(voto)
    return votos
}
const getVotos = async () => {
    const lista = await model.getVotos()
    return lista
}

const getVotosPorZona = async () => {
    try {
      const votosPorZona = model.getVotosPorZona();
      return votosPorZona;
    } catch (error) {
      throw error;
    }
  };
  const getVotosGenerales = async () => {
    const votosGenerales = model.getVotosGenerales()
    return votosGenerales
  }
  const getPorcentajeVotos = async () => {
    
      const porcentajeVotos = model.getPorcentajeVotos();
      return porcentajeVotos;

  };
export default{
    postAgregarVoto,
    getVotos,
    getVotosPorZona,
    getVotosGenerales,
    getPorcentajeVotos
}