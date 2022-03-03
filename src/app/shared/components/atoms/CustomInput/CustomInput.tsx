import React from 'react';
import './style.css';

type Props = {
  name: string;
  label: string;
  error: string;
  placeholder: string;
  type: string;
  value: string;
};

const CustomInput: React.FC<Props> = ({
  name,
  label,
  error,
  placeholder,
  type,
  value,
}) => {
  return (
    <div>
      {/*ho provato a usare classeName="first" per poi richiamarlo nel file CSS*/}

      <div className='first'>
        <label htmlFor='name'>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
        />
        <p>{error}</p>
      </div>
    </div>
  );
};

export { CustomInput };
