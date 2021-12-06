const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, 'husky'),
    React.createElement('h3', {}, 'white'),
    React.createElement('h3', {}, 'male')
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'fID' }, 'Adopt me'),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
