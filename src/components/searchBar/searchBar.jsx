import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';
import css from './searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.query.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }
    onSearch(values.query);
    resetForm();
  };

  return (
    <div className={css.searchWrapper}>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            name="query"
            placeholder="Search images..."
            className={css.input}
          />
          <button type="submit" className={css.button}>
            <IoSearchOutline size={20} />
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </div>
  );
};

export default SearchBar;