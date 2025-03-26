import "./App.css";
import ValidateInputOTP from "./components/ValidateInputOTP";

const OTP_DIGITS_COUNT = 5;

function App() {
  return (
    <div className="app">
      <h1>Validate OTP</h1>

      <ValidateInputOTP OTP_DIGITS_COUNT={OTP_DIGITS_COUNT} />
    </div>
  );
}

export default App;
