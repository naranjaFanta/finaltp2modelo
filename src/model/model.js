const votos = [
    { nombreZona: "zona1", nombreCandidato: "candidatoA" },
    { nombreZona: "zona2", nombreCandidato: "candidatoA" },
    { nombreZona: "zona3", nombreCandidato: "candidatoA" },
    { nombreZona: "zona1", nombreCandidato: "candidatoB" },
  ];
  
  const distritosPermitidos = ["zona1", "zona2", "zona3", "zona4"];
  const candidatosPermitidos = ["candidatoA", "candidatoB", "candidatoC", "enblanco"];
  
  const postAgregarVoto = (voto) => {
    const { distrito, candidato } = voto;
  
    if (!distritosPermitidos.includes(distrito) && !candidatosPermitidos.includes(candidato)) {
      throw new Error('zona no correspondiente y candidato no válido');
    }
    if (!distritosPermitidos.includes(distrito)) {
      throw new Error('zona no correspondiente');
    }
    if (!candidatosPermitidos.includes(candidato)) {
      throw new Error('candidato no válido');
    }
  
    votos.push(voto);
    return voto;
  };
  
  const getVotos = () => {
    console.log('Modelo - votos:', votos);
    if (votos.length < 1) {
      throw new Error('lista vacia');
    }
    return votos;
  };
  
  const getVotosPorZona = () => {
    const votosPorZona = {};
  
    distritosPermitidos.forEach(zona => {
      votosPorZona[zona] = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 };
    });
  
    votos.forEach(voto => {
      if (votosPorZona[voto.nombreZona]) {
        votosPorZona[voto.nombreZona][voto.nombreCandidato]++;
      }
    });
  
    return votosPorZona;
  };

  const getVotosGenerales = () => {
    const votosGenerales = { candidatoA: 0, candidatoB: 0, candidatoC: 0, enblanco: 0 }

    votos.forEach( voto => {
        if(votosGenerales[voto.nombreCandidato] !== undefined){
            votosGenerales[voto.nombreCandidato]++
        }
    })
    return { generales : votosGenerales}
  }
  const getPorcentajeVotos = () => {
    const votosGenerales = getVotosGenerales().generales;
  
    // Asignar votos en blanco al candidato con más votos
    const maxVotos = Math.max(votosGenerales.candidatoA, votosGenerales.candidatoB, votosGenerales.candidatoC);
    let candidatoMaxVotos = Object.keys(votosGenerales).find(candidato => votosGenerales[candidato] === maxVotos);
  
    if (candidatoMaxVotos !== 'enblanco') {
      votosGenerales[candidatoMaxVotos] += votosGenerales.enblanco;
    }
    delete votosGenerales.enblanco;
  
    const totalVotosValidos = votosGenerales.candidatoA + votosGenerales.candidatoB + votosGenerales.candidatoC;
  
    const porcentajeVotos = [
      { candidatoA: ((votosGenerales.candidatoA / totalVotosValidos) * 100).toFixed(2) + '%' },
      { candidatoB: ((votosGenerales.candidatoB / totalVotosValidos) * 100).toFixed(2) + '%' },
      { candidatoC: ((votosGenerales.candidatoC / totalVotosValidos) * 100).toFixed(2) + '%' }
    ];
  
    return porcentajeVotos;
  };

  export default {
    postAgregarVoto,
    getVotos,
    getVotosPorZona,
    getVotosGenerales,
    getPorcentajeVotos
  };
  