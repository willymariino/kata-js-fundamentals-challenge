const {
  songs,
  getTitlesAfter2015,
  getLongestSong,
  countRockSongs,
  getArtistsOver4Minutes,
  hasJazzSong,
  getAverageSongDuration,
  filterSongsFromSeventies,
  sortSongsByYearDesc,
  groupSongsByGenre,
  getFirstSongUnder4Minutes,
} = require('../src/08-songs');

describe('Esercizi sulle canzoni', () => {
  test('recupera i titoli di tutte le canzoni pubblicate dopo il 2015', () => {
    const result = getTitlesAfter2015(songs);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(['Shape of You', 'Blinding Lights']);
  });

  test('trova la canzone più lunga', () => {
    const result = getLongestSong(songs);
    expect(result).toBeDefined();
    expect(result.title).toBe('Bohemian Rhapsody');
  });

  test('conta quante canzoni appartengono al genere "Rock"', () => {
    const result = countRockSongs(songs);
    expect(typeof result).toBe('number');
    expect(result).toBe(1);
  });

  test('ottieni i nomi degli artisti delle canzoni con durata superiore a 4 minuti', () => {
    const result = getArtistsOver4Minutes(songs);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(expect.arrayContaining(['Ed Sheeran', 'Queen', 'Dave Brubeck']));
  });

  test('verifica se esiste almeno una canzone del genere "Jazz"', () => {
    const result = hasJazzSong(songs);
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
  });

  test('calcola la durata media di tutte le canzoni', () => {
    const result = getAverageSongDuration(songs);
    expect(typeof result).toBe('number');
    expect(result).toBeCloseTo(4.342, 2);
  });

  test('filtra le canzoni pubblicate negli anni 70', () => {
    const result = filterSongsFromSeventies(songs);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Bohemian Rhapsody');
  });

  test('ordina le canzoni per anno di pubblicazione (dal più recente al più vecchio)', () => {
    const result = sortSongsByYearDesc(songs);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].year).toBe(2020);
    expect(result[result.length - 1].year).toBe(1959);
  });

  test('raggruppa le canzoni per genere musicale', () => {
    const result = groupSongsByGenre(songs);
    expect(typeof result).toBe('object');
    expect(result.Rock).toBeDefined();
    expect(result.Jazz).toBeDefined();
    expect(result.Rock[0].title).toBe('Bohemian Rhapsody');
    expect(result.Jazz[0].title).toBe('Take Five');
  });

  test('trova il titolo della prima canzone che dura meno di 4 minuti', () => {
    const result = getFirstSongUnder4Minutes(songs);
    expect(typeof result).toBe('string');
    expect(result).toBe('Blinding Lights');
  });
});
