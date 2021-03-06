import React from "react";
import { Container } from "react-bootstrap";

//Create an AUTH URL
//Have our app request authorization; the user login and authorizes access
//const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a1e6e8179af44be5ade5659fad3dd960&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=a1e6e8179af44be5ade5659fad3dd960&response_type=code&redirect_uri=https://spotify-lyrics-app.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-login" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
