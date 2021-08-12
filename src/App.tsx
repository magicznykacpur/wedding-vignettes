import React from 'react';
import './App.css';

function App() {
  const names = ['Sara', 'Kacper', 'Anna', 'Tata', 'Mama', 'Stasiu', 'Olga', 'Pradziadek Stanislaw', 'Michal', 'Sonia', 'Damian', 'Bianca', 'Julia']
  const isDziadek = (name: string): boolean => name.includes('Stanislaw');

  const splitDziadek = (name: string) => {
    const split = name.split(' ')
    return (
      <>
        <div>{split[0]}</div>
        <div className="margin">{split[1]}</div>
      </>
    )
  }

  const mappedNames = names.map((name) => <li className="card">
    <div className={isDziadek(name) ? 'dziadzio-font' : 'name'}>
      {isDziadek(name) ? splitDziadek(name) : name}
    </div>
  </li>)

  return (
    <ul className="cards-wrapper">
      {mappedNames}
    </ul>
  );
}

export default App;
