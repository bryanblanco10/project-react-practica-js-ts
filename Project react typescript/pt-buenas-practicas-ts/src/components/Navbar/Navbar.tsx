import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
const Navbar = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <IconButton aria-label="favorite" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
