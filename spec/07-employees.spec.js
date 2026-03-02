const {
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
} = require('../src/07-employees');

describe('Esercizi sugli impiegati', () => {
  test('filtra gli impiegati in vacanza', () => {
    // aspettato: solo impiegati con onHoliday: true
    const result = filterEmployeesOnHoliday(employees);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every(e => e.onHoliday)).toBe(true);
  });

  test('trova il nome dell\'impiegato più giovane', () => {
    const result = getYoungestEmployeeName(employees);
    expect(typeof result).toBe('string');
    expect(result).toBe('Alex');
  });

  test('conta quanti impiegati non sono in vacanza', () => {
    const result = countEmployeesNotOnHoliday(employees);
    expect(typeof result).toBe('number');
    expect(result).toBe(2);
  });

  test('verifica se ci sono impiegati con più di 50 anni', () => {
    const result = hasEmployeesOverFifty(employees);
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
  });

  test('calcola l\'età media degli impiegati', () => {
    const result = getAverageEmployeeAge(employees);
    expect(typeof result).toBe('number');
    expect(result).toBeCloseTo(39.4, 1);
  });

  test('raggruppa gli impiegati per stato di vacanza', () => {
    const result = groupEmployeesByHolidayStatus(employees);
    expect(typeof result).toBe('object');
    expect(Array.isArray(result.true)).toBe(true);
    expect(Array.isArray(result.false)).toBe(true);
    expect(result.true.every(e => e.onHoliday)).toBe(true);
    expect(result.false.every(e => !e.onHoliday)).toBe(true);
  });

  test('ottieni i nomi degli impiegati con più di 30 anni', () => {
    const result = getEmployeeNamesOverThirty(employees);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(expect.arrayContaining(['Jim', 'Kate', 'Anne']));
  });

  test('verifica se tutti gli impiegati sono maggiorenni', () => {
    const result = areAllEmployeesAdults(employees);
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
  });

  test('ordina gli impiegati per età', () => {
    const result = sortEmployeesByAge(employees);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].name).toBe('Alex');
    expect(result[result.length - 1].name).toBe('Jim');
  });

  test('restituisci il primo impiegato che è in vacanza', () => {
    const result = getFirstEmployeeOnHoliday(employees);
    expect(result).toBeDefined();
    expect(result.onHoliday).toBe(true);
    expect(result.name).toBe('Alex');
  });
});
