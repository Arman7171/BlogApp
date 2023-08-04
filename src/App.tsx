import { withCookies } from 'react-cookie';
import { Authorization } from './Layout/Authorization/Authorization';

function App() {
  return (
    <div className='h-100'>
      <Authorization />
    </div>
  );
}

export default withCookies(App);
