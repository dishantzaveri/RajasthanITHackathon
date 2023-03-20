import BasicTable from '../Components/BasicTable';
import Navbar from '../Components/Navbar';

export default function Insurance() {
  return (
    <>
    <Navbar />
    <div style={{ textAlign: 'left', marginInline: '15%' }}>
      <h1>Insurance</h1>
      <p>
        The government has several provisions for micro and small services like
        yours and would love to help you financially! Browse through the schemes
        below:
      </p>
      <BasicTable />
    </div>
    </>
  )
}
