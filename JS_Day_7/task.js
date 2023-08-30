// Functions to Display songs by artist, genre, title
function displaySongByArtist(songGroup, artistName){
    const songs_by_artist = songGroup[artistName]

    if (songs_by_artist !== undefined) {
        console.log(`Songs by ${artistName}`);
        console.log(songs_by_artist);
    } else {
        console.log(`${artistName} not found.`);
    }
}

function displaySongByTitle(songGroup, titleName) {
    const songs_by_title = songGroup[titleName]

    if (songs_by_title !== undefined) {
        console.log(`Title: ${titleName}`);
        console.log(songs_by_title);
    } else {
        console.log(`Title: ${titleName} not found`);
    }
}

function displaySongByGenre(songGroup, genreName){
    const songs_by_genre = songGroup[genreName]

    if (songs_by_genre !== undefined) {
        console.log(`Songs with Genre ${genreName}`);
        console.log(songs_by_genre);
    } else {
        console.log(`genre ${genreName} not found.`);
    }
}


// Functions for Grouping songs by artist, genre, title
function groupSongByArtist(songList){
    const songs = {}

    for (const song of songList) {
        if (!songs[song.artist]) {
            songs[song.artist] = [song]
        } else {
            songs[song.artist].push(song)
        }
    }

    return songs
}

function groupSongByTitle(songList){
    const songs = {}

    for (const song of songList) {
        if (!songs[song.title]) {
            songs[song.title] = [song]
        } else {
            songs[song.title].push(song)
        }
    }

    return songs
}

function groupSongByGenre(songList){
    const songs = {}

    for (const song of songList) {
        if (!songs[song.genre]) {
            songs[song.genre] = [song]
        } else {
            songs[song.genre].push(song)
        }
    }

    return songs
}


// functions to Grouping songs with duration less than one hour
function groupSongsByDuration(songList) {
    const MAX_DURATION = 60; 

    const artists = songList.map(obj => obj.artist)
    const genres = songList.map(obj => obj.genre)

    const shuffledSongs = songList.sort(() => Math.random() - 0.5); 

    const groupedSongs = [];
    let currentGroup = { songList: [], duration: 0 };

    shuffledSongs.forEach(song => {
        const randomArtist = artists[Math.floor(Math.random() * artists.length)];
        const randomGenre = genres[Math.floor(Math.random() * genres.length)];

        const songDurationInMinutes = convertForMinutes(song.duration);

        if (currentGroup.duration + songDurationInMinutes <= MAX_DURATION) {
            currentGroup.songList.push({ ...song, artist: randomArtist, genre: randomGenre });
            currentGroup.duration += songDurationInMinutes;
        } else {
            groupedSongs.push(currentGroup);
            currentGroup = { songList: [], duration: 0 }; // new group
        }
    });

    
    if (currentGroup.songList.length > 0) {
        groupedSongs.push(currentGroup);
    }

    return groupedSongs;
}

function convertForMinutes(duration) {
    const [minutes, seconds] = duration.split(':').map(Number);
    return minutes * 60 + seconds;
}

function convertForSecondsToString(duration) {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60;
    return `${minutes.toString()}:${seconds.toString()}`
}


const songList = [
    {
        title: `Ten Talk`,
        artist: `YoungBoy Never Broke Again`,
        genre: `HipHop/Rap`,
        duration: `00:10:00`
    },
    {
        title: `Life Support`,
        artist: `YoungBoy Never Broke Again`,
        genre: `HipHop/Rap`,
        duration: `00:13:00`
    },
    {
        title: `Blinding Lights`,
        artist: `The Weeknd`,
        genre: `Pop`,
        duration: `00:15:00`
    },
    {
        title: `Stay`,
        artist: `Justin Bieber`,
        genre: `Pop`,
        duration: `00:20:00`
    },
    {
        title: `Off My Face`,
        artist: `Justin Bieber`,
        genre: `Pop`,
        duration: `00:13:00`
    },
    {
        title: `Stuck With U`,
        artist: `Justin Bieber`,
        genre: `Pop`,
        duration: `00:15:00`
    },
    {
        title: `One Dance`,
        artist: `Drake`,
        genre: `RnB`,
        duration: `00:10:00`
    },
    {
        title: `Laugh Now Cry Later`,
        artist: `Drake`,
        genre: `HipHop/Rap`,
        duration: `00:12:00`
    },
    {
        title: `Toosie Slide`,
        artist: `Drake`,
        genre: `HipHop/Rap`,
        duration: `00:09:20`
    },
    {
        title: `God's Plan`,
        artist: `Drake`,
        genre: `HipHop/Rap`,
        duration: `00:20:00`
    },
    {
        title: `God Did`,
        artist: `Drake`,
        genre: `HipHop/Rap`,
        duration: `00:10:00`
    },
    {
        title: `Little Mermaid`,
        artist: `Drake`,
        genre: `RnB`,
        duration: `00:10:00`
    },
    {
        title: `Little Y`,
        artist: `Drake`,
        genre: `RnB`,
        duration: `00:10:00`
    },
    {
        title: `Little Z`,
        artist: `Drake`,
        genre: `RnB`,
        duration: `00:10:00`
    }
    
]

const song_group_by_artist = groupSongByArtist(songList)
const song_group_by_genre = groupSongByGenre(songList)
const song_group_by_title = groupSongByTitle(songList)
const song_group_by_duration = groupSongsByDuration(songList)

// const title_name = `Ten Talk` 
// const artist_name = `YoungBoy Never Broke Again` 
// const genre_name = `HipHop/Rap`

song_group_by_duration.forEach((group, index) => {
    console.log(`\nGroup ${index + 1}:\n`);
    group.songList.forEach(song => {
        console.log(`   ${song.title} - ${song.duration} - ${song.artist} - ${song.genre}`);
    });
    console.log(`\nTotal Duration: ${convertForSecondsToString(group.duration)}:00`);
    console.log('\n');
});



// console.log(groupSongByArtist(songList));
// console.log(groupSongByTitle(songList));
// console.log(groupSongByGenre(songList));

// displaySongByArtist(song_group_by_artist, artist_name)
// displaySongByTitle(song_group_by_title, title_name)
// displaySongByGenre(song_group_by_genre, genre_name)