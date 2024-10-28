import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {
  // if you need to use state, you can use the useState hook.
  const [categories, setCategories] = useState(['Demon Slayer']);

  const onAddCategory = ( newCategory ) => {
    /* To avoid inconsistencies, you can use the function form of th state setter.
    this way, you can be sure that the state (cat) you are using is the most recent one.
    new way to add a new category , don't need to send the setCategories function directly */
    const lowerCaseCategories = categories.map( cat => cat.toLowerCase());
    const lowerCaseNewCategories = newCategory.toLowerCase();
    if (lowerCaseCategories.includes(lowerCaseNewCategories)) return;
    setCategories( cat => [newCategory, ...cat]);
  }

  const onDeleteCategory = ( catToDelete ) => {
    const lowerCaseCategories = categories.map( cat => cat.toLowerCase());
    const lowerCaseDeleteCategories = catToDelete.toLowerCase();
    if ( lowerCaseCategories.includes(lowerCaseDeleteCategories) ) {
      setCategories( categories.filter( cat => cat !== catToDelete))
    }
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
      // setCategories={ setCategories }
      // new way to add a new category , don't need to send the setCategories function directly
        onNewCategory={ value => onAddCategory(value) }
      />

      {categories.map(category => (
        <GiftGrid
          key={category}
          category={category}
          onDeleteCategory={onDeleteCategory}
          />
        ))}
    </>
  );
}
