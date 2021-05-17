
function fetchAlbums() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then( json => console.log (json));
  
}

fetchAlbums();


async function fetchAlbums() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const json = await res.json();
}

fetchAlbums();