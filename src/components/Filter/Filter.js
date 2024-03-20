import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FormControl className="filter" padding="10px">
      <FormLabel margin="0 0 10px">Filter</FormLabel>
      <Input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter filter text..."
        width="200px"
        padding="10px"
        marginLeft="10px"
        borderRadius="5px"
        border="1px solid #ccc"
      />
    </FormControl>
  );
}

export default Filter;
