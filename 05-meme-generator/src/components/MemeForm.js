import React from "react";

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomMeme: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useState(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        })

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomMeme: url
        }));
    }
    
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value 
        }));
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange} />
                <input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
                <div className="meme-container">
                    <img src={meme.randomMeme} alt="meme" className="meme-image" />
                    <h2 className="meme-text top-text">{meme.topText}</h2>
                    <h2 className="meme-text bottom-text">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}