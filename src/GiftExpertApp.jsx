import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/Giftgrid';

export const GiftExpertApp = () => {
  // if you need to use state, you can use the useState hook.
  const [categories, setCategories] = useState(['Demon Slayer', 'One Punch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    /* If the category state change between  the moment in which is read
    and the update moment, this can cause inconsistencies.
    this is why you should use the function form of the state setter. */
    // setCategories(['Hunter', ...categories]);

    /* To avoid inconsistencies, you can use the function form of th state setter.
    this way, you can be sure that the state (cat) you are using is the most recent one.
    new way to add a new category , don't need to send the setCategories function directly */
    const lowerCaseCategories = categories.map( cat => cat.toLowerCase());
    const lowerCaseNewCategories = newCategory.toLowerCase();
    if (lowerCaseCategories.includes(lowerCaseNewCategories)) return;
    setCategories( cat => [newCategory, ...cat]);
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
      // setCategories={ setCategories }
      // new way to add a new category , don't need to send the setCategories function directly
      onNewCategory={ value => onAddCategory(value) }
      />

      {categories.map(category => (<GiftGrid key={category} category={category} />))}
    </>
  );
}
