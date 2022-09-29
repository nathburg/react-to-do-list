import './Auth.css';

export default function Auth() {
  return (
    <div>
      <div className='input-container'>
        <label>Email
          <input />
        </label>
        <label>Password
          <input />
        </label>
        <button>Enter</button>
      </div>
    </div>
  );
}
