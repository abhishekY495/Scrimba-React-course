import React from "react";
import "./style.css";

export default function App() {
  const [page, setPage] = React.useState(1);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then(response => response.json())
      .then(data => setImages(data))
  },[page])

  return (
    <div className="App">
      <h1 className="heading">Images</h1>
      <div className="button-container">
        <button className="btn" onClick={() => setPage(1)}>Page 1</button>
        <button className="btn" onClick={() => setPage(2)}>Page 2</button>
        <button className="btn" onClick={() => setPage(3)}>Page 3</button>
        <button className="btn" onClick={() => setPage(4)}>Page 4</button>
      </div>

      <div className="images-container">
        {images.map(image => (
          <div className="image" key={image.id} style={{backgroundImage:`url(${image.download_url})`}}></div>)
        )}
      </div>
    </div>
  );
}
