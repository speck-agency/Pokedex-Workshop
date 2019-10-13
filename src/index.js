// Kako bi se mogao koristiti react unutuar javascripta potrebno je prvo importati React
import React from 'react';
// Importanjem ReactDOM-a dohvaćamo alat za prikazivanje react komponente u html file-u
import ReactDOM from 'react-dom';
// App je React komponenta definirana unutar App.js file-a
import App from './App';

// ReactDOM renderira App komponentu u elementu s id-em root
ReactDOM.render(<App />, document.getElementById('root'));

// Otvori App.js za nastavak izgradnje pokedexa
