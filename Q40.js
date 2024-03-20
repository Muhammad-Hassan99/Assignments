"use strict";
function make_album(artist, title, tracks) {
    let album = { artist,
        title, tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Nirvan", "Nevermind", 12));
console.log(make_album("Enigma", "The Cross of Changes", 7));
console.log(make_album("Janet Jackson", " The Velvet Rope", 9));
