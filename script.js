// unsplash API
const count = 10;
const apiKey = 'pfiusTi0rjDI73w0KchxNEfm38uui5s6VuoP1aEV11M';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// getting photos from api
async function getPhotos() {
    try {
        const response =await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}

getPhotos();