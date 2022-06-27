import React from "react";
import memesData from "../memesData";

export default function MemeForm() {
    const [memeUrl, setMemeUrl] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const memeUrl = memesArray[randomNumber].url;
        setMemeUrl(memeUrl);
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
                <img src={memeUrl} alt="meme" className="meme-image" />
            </div>
        </main>
    )
}