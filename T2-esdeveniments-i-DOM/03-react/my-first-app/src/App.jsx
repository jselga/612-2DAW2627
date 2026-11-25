function App() {
  let nom = "2DAW";
  // nom = "";
  if (nom) {
    return <h1>Welcome {nom}</h1>;
  }
  return <h3>no-name</h3>;
}

export default App;
