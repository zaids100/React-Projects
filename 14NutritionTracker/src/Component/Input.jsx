function Input({ type, placeholder, value, handleValue }) {
  return (
    <div className="input">
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => handleValue(type === 'number' ? parseFloat(e.target.value) : e.target.value)} 
      /> 
    </div>
  );
}

export default Input;
