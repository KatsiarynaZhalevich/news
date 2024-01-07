import { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from "react-redux";
import { updateSearchParams, updateSearchType } from "../../../common/store/slices/settingSlice";
import { useSelector } from "react-redux";
import getPostsSettings from "../../../common/store/selectors/settingSelectors";
import './search.css';


const Search = () => {
  const searchSettings = useSelector(getPostsSettings);
  const [searchType, setSearchType] = useState<string>(searchSettings.searchType);
  const dispatch = useDispatch();

  const changeSearchType = (event: SelectChangeEvent) => {
    setSearchType(event.target.value);
    if(searchSettings.searchStr){
      dispatch(updateSearchType(event.target.value));
    }    
  }

  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateSearchParams({
        searchString: event.target.value.trim().replace(/ /g,"%20"), 
        searchType}));
  }

  const cleanUpSearch = () => {
    dispatch(updateSearchParams({searchString: '', searchType}));
  }

  const onMouseDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      cleanUpSearch();
    }
  }

  return <div className="search flex justify-end mb-4">
      <div className="flex flex-col items-end md:items-center  md:flex-row">
      <FormControl sx={{ m: 1,}} size="small">
        <InputLabel 
          id="searchType"
          sx={{
            '&:hover': {color: '#cbd5e1'},
            '#search .Mui-focused': { borderColor: '#cbd5e1'},
          }}>
            Search by
        </InputLabel>
        <Select
          labelId="searchType"
          value={searchType}
          label="Search by"
          onChange={changeSearchType}
          sx={{
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#cbd5e1'},
          }}
        >
          <MenuItem value='&query='>Match</MenuItem>
          <MenuItem value=',author_'>Author</MenuItem>
        </Select>
      </FormControl>
      <OutlinedInput
        placeholder={`Search by ${searchType === ',author_' ? 'author' : 'match'}`}
        type='text'
        value={searchSettings.searchStr}
        onChange={changeSearchValue}
        onKeyDown={onMouseDownEvent}
        sx={{
          marginLeft: '5px',
          '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: '#cbd5e1',
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={cleanUpSearch}
              edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }/>
      </div>
  </div>
}

export default Search;
