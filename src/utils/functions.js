const removeAccents = (str = '') => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
};

const findOcurrences = (arrayToSearch = [], elementToSearch = "") => {
  const normalizedSearch = removeAccents(elementToSearch);
  const newArrayToSearch = arrayToSearch.map(elementAct => {
    return {
      ...elementAct,
      percent: parseFloat(elementAct?.percent).toFixed(2)
    }
  })
  return newArrayToSearch.find(element => {
    let normalizedElementName = removeAccents(element?.estado);

    if (normalizedElementName === "ESTADO DE MEXICO") {
      normalizedElementName = "MEXICO";
    }

    return (
      (normalizedElementName === "BAJA CALIFORNIA" && normalizedSearch === "BAJA CALIFORNIA") ||
      (normalizedElementName === normalizedSearch || normalizedElementName.includes(normalizedSearch))
    );
  });
};

const getColor = (value) => {
  // Define los colores en formato hexadecimal
  const white = "#FFFFFF";
  const yellow = "#FFFF00";
  const red = "#FF0000";

  // Ajusta el valor dentro del rango 0-100
  value = Math.min(100, Math.max(0, value));

  // Calcula la mezcla de colores en función del valor
  const percent = value / 100;
  let color1, color2, ratio;

  if (percent <= 0.5) {
    color1 = white;
    color2 = yellow;
    ratio = percent / 0.5;
  } else {
    color1 = yellow;
    color2 = red;
    ratio = (percent - 0.5) / 0.5;
  }

  const r = Math.floor(parseInt(color1.slice(1, 3), 16) * (1 - ratio) + parseInt(color2.slice(1, 3), 16) * ratio);
  const g = Math.floor(parseInt(color1.slice(3, 5), 16) * (1 - ratio) + parseInt(color2.slice(3, 5), 16) * ratio);
  const b = Math.floor(parseInt(color1.slice(5, 7), 16) * (1 - ratio) + parseInt(color2.slice(5, 7), 16) * ratio);

  const resultColor = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");

  return resultColor;

}


export { removeAccents, findOcurrences, getColor };