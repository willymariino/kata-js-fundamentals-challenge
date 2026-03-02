/**
  Esercizi sulle canzoni
  1. Recupera i titoli di tutte le canzoni pubblicate dopo il 2015.
  2. Trova la canzone più lunga (in base alla durata).
  3. Conta quante canzoni appartengono al genere "Rock".
  4. Ottieni i nomi degli artisti delle canzoni con durata superiore a 4 minuti.
  5. Verifica se esiste almeno una canzone del genere "Jazz".
  6. Calcola la durata media di tutte le canzoni.
  7. Filtra le canzoni pubblicate negli anni '70.
  8. Ordina le canzoni per anno di pubblicazione (dal più recente al più vecchio).
  9. Raggruppa le canzoni per genere musicale.
  10. Trova il titolo della prima canzone che dura meno di 4 minuti.
*/

const songs = [
  { title: 'Shape of You', artist: 'Ed Sheeran', year: 2017, duration: 4.24, genre: 'Pop' },
  { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020, duration: 3.20, genre: 'Synthwave' },
  { title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975, duration: 5.55, genre: 'Rock' },
  { title: 'Rolling in the Deep', artist: 'Adele', year: 2011, duration: 3.48, genre: 'Soul' },
  { title: 'Take Five', artist: 'Dave Brubeck', year: 1959, duration: 5.24, genre: 'Jazz' },
];

// 1. Recupera i titoli di tutte le canzoni pubblicate dopo il 2015
function getTitlesAfter2015(songs) {
  // TODO: implementa la funzione
}

// 2. Trova la canzone più lunga (in base alla durata)
function getLongestSong(songs) {
  // TODO: implementa la funzione
}

// 3. Conta quante canzoni appartengono al genere "Rock"
function countRockSongs(songs) {
  // TODO: implementa la funzione
}

// 4. Ottieni i nomi degli artisti delle canzoni con durata superiore a 4 minuti
function getArtistsOver4Minutes(songs) {
  // TODO: implementa la funzione
}

// 5. Verifica se esiste almeno una canzone del genere "Jazz"
function hasJazzSong(songs) {
  // TODO: implementa la funzione
}

// 6. Calcola la durata media di tutte le canzoni
function getAverageSongDuration(songs) {
  // TODO: implementa la funzione
}

// 7. Filtra le canzoni pubblicate negli anni '70
function filterSongsFromSeventies(songs) {
  // TODO: implementa la funzione
}

// 8. Ordina le canzoni per anno di pubblicazione (dal più recente al più vecchio)
function sortSongsByYearDesc(songs) {
  // TODO: implementa la funzione
}

// 9. Raggruppa le canzoni per genere musicale
function groupSongsByGenre(songs) {
  // TODO: implementa la funzione
}

// 10. Trova il titolo della prima canzone che dura meno di 4 minuti
function getFirstSongUnder4Minutes(songs) {
  // TODO: implementa la funzione
}

module.exports = {
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
};
