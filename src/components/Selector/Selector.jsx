import React, { useState, useEffect } from 'react'
import 'moment/locale/es';
import moment from 'moment/moment'
import styles from './Selector.module.css'
const Selector = ({ actualMonthSelected, selectDifferentMonth, disease }) => {
  moment.locale("es");
  const month = moment().format("MMMM");
  const monthNumber = moment().format("M");
  const year = moment().format("YYYY");
  const yearNumber = moment().format("YYYY");
  const limitOfYears = 2;
  const [typeOfDiseases, setTypeOfDiseases] = useState(disease);
  const [actualMonth, setactualMonth] = useState(actualMonthSelected);
  useEffect(() => {
    setactualMonth(actualMonthSelected)
  }, [actualMonthSelected]);
  useEffect(() => {
    setTypeOfDiseases(disease)
  }, [disease]);
  return (
    <div className={ styles.mainContainer }>
      <div>
        <h3>Selecciona el mes</h3>
        {
          /**show all months since January to actual month on Select element */
          <select name="month" id="month" value={ actualMonth } onChange={ (e) => selectDifferentMonth(e.target.value) }>
            <option value="">Select a month</option>
            {
              moment.months().map((month, i) => {
                if (i < monthNumber) {
                  return <option key={ i } value={ i + 1 }>{ month }</option>
                }
              })
            }
          </select>
        }
      </div>
      <div>
        <h3>Selecciona el tipo de enfermedad a consultar</h3>
        <h4>DIS:{ disease }</h4>
        <select
          onChange={
            (e) => selectDifferentMonth(actualMonth, e.target.value)
          }
          value={ typeOfDiseases }
          name="disease" id="disease">
          <option value="">Select a disease</option>
          <option value="ETV">Enfermedades transmitidas por vectores</option>
          <option value="EFES">Enfermedades febriles exantematicas</option>
        </select>
      </div>
    </div>
  )
}

export default Selector