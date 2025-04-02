import React from 'react';
import VerificationInput from 'react-verification-input';
import './input-styles.css';

interface Props {
  correctValue: boolean;
  setInputValue: any;
}
export const NumberInput: React.FC<Props> = ({ correctValue, setInputValue }) => {
  const onChangeInput = (e: string) => {
    console.log(e);
    setInputValue(e);
  };
  return (
    <VerificationInput
      onChange={onChangeInput}
      placeholder=" "
      validChars="0-9"
      autoFocus={true}
      classNames={{
        container: 'container',
        character: `character ${!correctValue && 'inCorrect'}`,
        characterInactive: ` ${correctValue ? 'character--inactive' : 'inCorrect'}`,
        characterSelected: 'character--selected',
        characterFilled: 'character--filled',
      }}
    />
  );
};
