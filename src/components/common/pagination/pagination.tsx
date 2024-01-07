import { IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useDispatch, useSelector } from "react-redux";
import { updatePagination } from "../store/slices/settingSlice";
import getPostsSettings from "../store/selectors/settingSelectors";

type PropPAgeCount = {
  pageCount: number
};

const Pagination = ({pageCount}: PropPAgeCount) => {
  const dispatch = useDispatch();
  const settings = useSelector(getPostsSettings);
  
  const getNextPage = () => {
    dispatch(updatePagination(settings.currentPage + 1));
  };

  const getPreviousPage = () => {
    dispatch(updatePagination(settings.currentPage - 1));
  };

  return  <div className="flex items-center justify-center">
              <IconButton data-testid="prevPage" disabled={settings.currentPage === 1} onClick={getPreviousPage}> 
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              <span className="inline-block mx-4" data-testid="pages">{settings?.currentPage} of {pageCount}</span>
              <IconButton data-testid="nextPage" disabled={pageCount === settings.currentPage} onClick={getNextPage}>
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
          </div>
}

export default Pagination;