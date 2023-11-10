import { Formik } from 'formik';
import {FormContainar,
        SearchForm,
        SearchFormButton,
        SearchFormButtonLabel,
        SearchFormInput} from './Searchbar.styled';


export const Searchbar = ({handleSubmit}) => (
  <div>
    <Formik
      initialValues={{
        search: '',
      }}

      onSubmit={(values, actions) => {
        console.log(values);
        handleSubmit(values.search);
        actions.resetForm();

      }}


      
    >

      <FormContainar>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel >Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name='search'
            type="text"
            // autocomplete="off"
            // autofocus
           placeholder="Search images and photos"
          />

        </SearchForm>
      </FormContainar>
    </Formik>
  </div>
);