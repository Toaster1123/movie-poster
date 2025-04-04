import React, { Dispatch, SetStateAction } from 'react';
import VerificationInput from 'react-verification-input';
import './input-styles.css';

interface Props {
  correctValue: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  loading: boolean;
  inputValue: string;
}
export const NumberInput: React.FC<Props> = ({
  correctValue,
  setInputValue,
  loading,
  inputValue,
}) => {
  const onChangeInput = (e: string) => {
    setInputValue(e);
  };
  const onFocusInput = () => {
    if (!correctValue && !loading) {
      setInputValue('');
    }
  };
  return (
    <VerificationInput
      value={inputValue}
      onChange={onChangeInput}
      onFocus={onFocusInput}
      placeholder=" "
      validChars="0-9"
      inputProps={{
        disabled: loading,
      }}
      classNames={{
        character: `character ${!correctValue && 'inCorrect'} ${loading && 'loading'}`,
        characterInactive: `${correctValue ? 'character--inactive' : 'inCorrect'}`,
        characterSelected: `${correctValue ? 'character--selected' : 'inCorrect'}`,
      }}
    />
  );
};
