import logo from '../logo.svg';

export default function Landing() {
  return (
    <div>
      {/* <header className="App-header"> */}
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ padding: '10px' }}
      />
      <p style={{ padding: '10px' }}> Loading... </p>
      {/* </header> */}
    </div>
  )
}
