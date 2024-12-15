import { AppBar, Toolbar, Typography } from '@mui/material'

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Cabinet
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
