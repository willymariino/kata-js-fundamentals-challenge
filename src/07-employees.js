/*
  Esercizi sugli impiegati

  1. Filtra gli impiegati in vacanza
  2. Trova il nome dell'impiegato più giovane
  3. Conta quanti impiegati non sono in vacanza
  4. Verifica se ci sono impiegati con più di 50 anni
  5. Calcola l'età media degli impiegati
  6. Raggruppa gli impiegati per stato di vacanza (onHoliday: true/false)
  7. Ottieni i nomi degli impiegati con più di 30 anni
  8. Verifica se tutti gli impiegati sono maggiorenni
  9. Ordina gli impiegati per età (dal più giovane al più anziano)
  10. Restituisci il primo impiegato che è in vacanza
*/

const employees = [
  { name: 'Alex', age: 21, onHoliday: true },
  { name: 'Susan', age: 28, onHoliday: false },
  { name: 'Jim', age: 56, onHoliday: true },
  { name: 'Kate', age: 55, onHoliday: true },
  { name: 'Anne', age: 37, onHoliday: false },
];

// 1. Filtra gli impiegati in vacanza
function filterEmployeesOnHoliday(employees) {
  // TODO: implementa la funzione
}

// 2. Trova il nome dell'impiegato più giovane
function getYoungestEmployeeName(employees) {
  // TODO: implementa la funzione
}

// 3. Conta quanti impiegati non sono in vacanza
function countEmployeesNotOnHoliday(employees) {
  // TODO: implementa la funzione
}

// 4. Verifica se ci sono impiegati con più di 50 anni
function hasEmployeesOverFifty(employees) {
  // TODO: implementa la funzione
}

// 5. Calcola l'età media degli impiegati
function getAverageEmployeeAge(employees) {
  // TODO: implementa la funzione
}

// 6. Raggruppa gli impiegati per stato di vacanza (onHoliday: true/false)
function groupEmployeesByHolidayStatus(employees) {
  // TODO: implementa la funzione
}

// 7. Ottieni i nomi degli impiegati con più di 30 anni
function getEmployeeNamesOverThirty(employees) {
  // TODO: implementa la funzione
}

// 8. Verifica se tutti gli impiegati sono maggiorenni
function areAllEmployeesAdults(employees) {
  // TODO: implementa la funzione
}

// 9. Ordina gli impiegati per età (dal più giovane al più anziano)
function sortEmployeesByAge(employees) {
  // TODO: implementa la funzione
}

// 10. Restituisci il primo impiegato che è in vacanza
function getFirstEmployeeOnHoliday(employees) {
  // TODO: implementa la funzione
}

module.exports = {
  employees,
  filterEmployeesOnHoliday,
  getYoungestEmployeeName,
  countEmployeesNotOnHoliday,
  hasEmployeesOverFifty,
  getAverageEmployeeAge,
  groupEmployeesByHolidayStatus,
  getEmployeeNamesOverThirty,
  areAllEmployeesAdults,
  sortEmployeesByAge,
  getFirstEmployeeOnHoliday,
};
