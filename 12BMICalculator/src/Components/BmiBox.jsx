import React, { useState } from 'react';
import InputField from './InputField';

function BmiBox() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
      setBmi(bmiValue);
      setBmiCategory(getBmiCategory(bmiValue));
    }
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    if (bmi >= 30 && bmi < 34.9) return 'Obesity (Class 1)';
    if (bmi >= 35 && bmi < 39.9) return 'Obesity (Class 2)';
    if (bmi >= 40) return 'Extreme Obesity (Class 3)';
    return '';
  };

  return (
    <div className="bmibox">
      <div className="allinputs">
        <InputField 
          label="Age" 
          placeholder="Enter your age" 
          value={age} 
          onChange={setAge} 
        />
        <InputField 
          label="Height (cm)" 
          placeholder="Enter your height" 
          value={height} 
          onChange={setHeight} 
        />
        <InputField 
          label="Weight (kg)" 
          placeholder="Enter your weight" 
          value={weight} 
          onChange={setWeight} 
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <h3>Category: {bmiCategory}</h3>
        </div>
      )}
    </div>
  );
}

export default BmiBox;
