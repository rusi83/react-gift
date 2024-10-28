import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('Naruto');

  // e = event
  // this function is called when  the user write in the input and update de value of inputValue
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // this function is called when the user submit the form when press enter
  // and add the new category calling the onNewCategory function and after clean the input value
  const onSubmit = (e) => {
    // the form is going to reload the page, so we prevent that with preventDefault
    e.preventDefault();
    // to prevent to add empty values on the box text
    const cleanValue = inputValue.trim();
    if (cleanValue.length <= 1) return;

    // function allows to add a new category, cats is the previous state,
    // inputValue is the new value to add  to the state  and we return the new state with the new value
    // setCategories( cats => [inputValue, ...cats]);

    // new way to add a new category , don't need to pass the previous state
    // and don't use a setCategories function directly
    onNewCategory(cleanValue);
    setInputValue('');
  }

  return (
    <form onSubmit={ (e) => onSubmit(e) }>
      <input
        id="setCat"
        type="text"
        placeholder="Search gifts"
        value={ inputValue } // allows to set the value of the input 'naruto
        onChange={ onInputChange } // this allows to change the value of the input, allow write in the input
      />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired
};
