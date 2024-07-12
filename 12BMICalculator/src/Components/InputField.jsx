import React from 'react';

function InputField({ label, placeholder, value, onChange }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
