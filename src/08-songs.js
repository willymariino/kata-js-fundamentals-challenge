/**
  Song exercises
  1. Get the titles of all songs released after 2015.
  2. Find the longest song (by duration).
  3. Count how many songs belong to the "Rock" genre.
  4. Get the names of the artists of songs longer than 4 minutes.
  5. Check if there is at least one song of the "Jazz" genre.
  6. Calculate the average duration of all songs.
  7. Filter the songs released in the 1970s.
  8. Sort the songs by release year (from most recent to oldest).
  9. Group the songs by musical genre.
  10. Find the title of the first song shorter than 4 minutes.
*/

const songs = [
  { title: 'Shape of You', artist: 'Ed Sheeran', year: 2017, duration: 4.24, genre: 'Pop' },
  { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020, duration: 3.20, genre: 'Synthwave' },
  { title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975, duration: 5.55, genre: 'Rock' },
  { title: 'Rolling in the Deep', artist: 'Adele', year: 2011, duration: 3.48, genre: 'Soul' },
  { title: 'Take Five', artist: 'Dave Brubeck', year: 1959, duration: 5.24, genre: 'Jazz' },
];

// 1. Get the titles of all songs released after 2015
function getTitlesAfter2015(songs) {
  // TODO: implement this function
}

// 2. Find the longest song (by duration)
function getLongestSong(songs) {
  // TODO: implement this function
}

// 3. Count how many songs belong to the "Rock" genre
function countRockSongs(songs) {
  // TODO: implement this function
}

// 4. Get the names of the artists of songs longer than 4 minutes
function getArtistsOver4Minutes(songs) {
  // TODO: implement this function
}

// 5. Check if there is at least one song of the "Jazz" genre
function hasJazzSong(songs) {
  // TODO: implement this function
}

// 6. Calculate the average duration of all songs
function getAverageSongDuration(songs) {
  // TODO: implement this function
}

// 7. Filter the songs released in the 1970s
function filterSongsFromSeventies(songs) {
  // TODO: implement this function
}

// 8. Sort the songs by release year (from most recent to oldest)
function sortSongsByYearDesc(songs) {
  // TODO: implement this function
}

// 9. Group the songs by musical genre
function groupSongsByGenre(songs) {
  // TODO: implement this function
}

// 10. Find the title of the first song shorter than 4 minutes
function getFirstSongUnder4Minutes(songs) {
  // TODO: implement this function
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
