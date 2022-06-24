import React from 'react';
import styles from './Select.module.scss';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
const Select = ({ placeholder, options, defaultValue, label, creatable, isMulti, noSpace, setValue, value }) => {
  const colourStyles = {
    control: (styles, isDisabled, isFocused, isSelected) => ({
      ...styles,
      backgroundColor: 'white',
      height: '35px !important',
      minHeight: '35px !important',
      borderColor: isFocused ? '#a9bcee' : '#ced4da',
      border: isFocused ? 'border: 1px solid #a9bcee !important' : 'border: 1px solid #ced4da !important',
      boxShadow: isFocused ? '0 0 0 0.25rem rgb(63 106 216 / 25%)' : 'none',
    }),

    placeholder: (styles) => ({ ...styles, fontSize: '0.88rem !important', fontWeight: '400  !important', lineHeight: '1.5  !important' }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      border: 'none',
      margin: 0,
      fontSize: '0.88rem !important',
      fontWeight: '400  !important',
      lineHeight: '1.5  !important',
      '& input': {
        fontSize: '0.88rem !important',
        fontWeight: '400  !important',
        lineHeight: '1.5  !important',
      },
    }),
    valueContainer: (styles) => ({ ...styles, padding: 0, border: 'none', margin: '0 0 0 12px' }),
    indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
    indicatorsContainer: (styles) => ({
      ...styles,
      display: 'none',
      '&::after': {
        content: '""',
        display: 'block',
      },
    }),
    singleValue: (styles) => ({ ...styles, padding: 0, border: 'none', fontSize: '0.88rem', fontWeight: '400', lineHeight: '1.5' }),
    listBox: (styles) => ({ ...styles, padding: 0, border: 'none', fontSize: '0.88rem', fontWeight: '400', lineHeight: '1.5' }),
    container: (styles, isDisabled, isFocused, isSelected) => ({
      ...styles,
      padding: 0,
      margin: 0,
      height: '35px !important',
      minHeight: '35px !important',
      borderColor: isFocused ? '#a9bcee' : '#ced4da',
      border: isFocused ? 'border: 1px solid #a9bcee !important' : 'border: 1px solid #ced4da !important',
      boxShadow: isFocused ? '0 0 0 0.25rem rgb(63 106 216 / 25%)' : 'none',
    }),
    menuList: (styles) => ({ ...styles, padding: '10px 8px', border: 'none', margin: 0 }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = 'black';
      return {
        ...styles,
        backgroundColor: isSelected ? '#E0ECFF' : '#fff',
        padding: 0,
        borderRadius: '4px',
        padding: '4px 8px',
        color: '#000',
        fontSize: '14px',
        fontWeight: '400',

        marginTop: '4px',
        '&:first-child': {
          marginTop: 0,
        },
        // margin: '0 12px',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

  return (
    <>
      {label && <label class={`form-label ${!noSpace && 'mt-3'}`}>{label}</label>}

      {creatable ? (
        <CreatableSelect noOptionsMessage={({ inputValue: string }) => 'Нет опций'} defaultValue={defaultValue} placeholder={placeholder ?? ''} isMulti options={options} />
      ) : (
        <ReactSelect value={value} styles={colourStyles} className="react-select-custom" onChange={(e) => setValue(e)} noOptionsMessage={({ inputValue: string }) => 'Нет опций'} defaultValue={defaultValue} isMulti={isMulti} options={options} placeholder={placeholder ?? ''} />
      )}
    </>
  );
};

export default Select;

{
  /* <div class=" css-1cmo6ae-control"><div class=" css-319lph-ValueContainer"><div class=" css-qc6sy-singleValue">Администратор</div><div class=" css-6j8wv5-Input" data-value=""><input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2 / auto / auto; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"></div></div><div class=" css-1hb7zxy-IndicatorsContainer"><span class=" css-1okebmr-indicatorSeparator"></span><div class=" css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div> */
}
