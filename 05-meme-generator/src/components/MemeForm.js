import memesData from "../memesData"

export default function MemeForm() {
    function getMemeImage() {
        const memesArray = memesData.data.meme;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
    }
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}