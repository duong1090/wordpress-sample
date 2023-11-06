
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ marginBottom: 20 }}>This is React.js Page</div>
        
      <iframe
        style={{ width: 600, height: 600}}
        title='wordpress'
        src='http://localhost:8888/wordpress/index.php/sample-page/'
      />
      </header>
    </div>
  );
}

export default App;
