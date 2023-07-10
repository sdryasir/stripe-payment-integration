import logo from './logo.svg';
import './App.css';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import Payment from './components/Payment';
function App() {
  return (
    <div>
      <Elements stripe={loadStripe('pk_test_51JXUPNLs3WLhYCTdb6263j1MdZgKdGAIcneTvUokHLpJl4d5dsVdRQ5AxyIKdnAeI2vA8pPOddH5s5rFkZ2x78ZS008FJnKsVC')}>
        <Payment/>
      </Elements>
    </div>
  );
}

export default App;
