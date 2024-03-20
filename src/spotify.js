const authEndpoint = "https://accounts.spotify.com/authorize"
const clientId = "3a930794cd224931854ca0d8269ac662"
const redirectUri = "http://localhost:3000"
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;