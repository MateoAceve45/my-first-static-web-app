import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🎶 Rock Legends</h1>
        <p>Classic Rock Forever 🤘</p>
      </header>

      <main className="content">
        <section className="band">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/0f/GunsnRosesAppetiteforDestructionAlbumCover.jpg" alt="Guns N' Roses" />
          <h2>Guns N' Roses</h2>
          <p>Appetite for Destruction (1987)</p>
        </section>

        <section className="band">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2c/Queen_The_Greatest_Hits_album_cover.jpg" alt="Queen" />
          <h2>Queen</h2>
          <p>Greatest Hits (1981)</p>
        </section>

        <section className="band">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" alt="Led Zeppelin" />
          <h2>Led Zeppelin</h2>
          <p>Led Zeppelin IV (1971)</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Rock Legends | Built with ❤️ and React</p>
      </footer>
    </div>
  );
}

export default App;
