import logo from '../logo.svg';

export default function Landing(props) {
  return (
    <div style={{ display: props.show }}>
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
