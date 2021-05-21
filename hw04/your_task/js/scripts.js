const baseurl = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
   /* url = baseurl + "?type=artist&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTracks(data[0]));*/
};

const getAlbums = (term) => {
    
};



const getArtist = (term) => {
    url = baseurl + "?type=artist&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayArtist(data[0]));
};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
/*const displayTracks = (foundtracks) => {
    if (foundtracks == null){
        document.querySelector("#tracks").innerHTML = "no tracks found :(";
    } else {
        const tentracks = foundtracks.length;
        for (t= 0; t < Math.min(5,lentracks); t++){
    template= `<section class="${foundtracks[t].preview_url}">
                        <img src="${foundtracks[t].album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                            <h3>${foundtracks[t].name}</h3>
                            <p>${foundtracks.tracks[t].artist.name}</p>
                        </div>
                    </section>`;
        document.querySelector('#tracks').innerHTML = template; 
    }
}*/
const displayArtist = (artist) => {
    /*if (art == null){
        document.querySelector("#artist").innerHTML = "no artist found :(";
    } 
    else {*/
        {
    template = `<section class="artist-card"id="${artist.id}">
                    <div>
                        <img src="${artist.image_url}">
                        <h3>${artist.name}</h3>
                        <div class="footer">
                            <a href="${artist.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
    document.querySelector('#artist').innerHTML = template;
    }
}