//Call to API to get data from DB by month
const API_URL = process.env.API_URL;
const GetMapDataByMonth = async (month, disease = 'ETV') => {
  const mapData = await fetch(`${API_URL}/datos/byDate?month=${month}&year=2023&tableData=${disease}`)
    .then(res => res.json())
    .then(data => {
      const newData = data?.data.map(d => {
        return {
          probabilidad_por_mes: d.probabilidad_por_mes,
          mes: d.mes,
          entidad: d.entidad,
          anio: d.anio
        }

      })
      return newData;
    }).catch(err => {
      return [];
    });
  return mapData;
}

export {
  GetMapDataByMonth
}