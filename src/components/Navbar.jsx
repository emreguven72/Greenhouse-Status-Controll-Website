import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useAuth } from "../providers/AuthProvider";
import AccountMenu from "./ProfileMenu";

const Navbar = () => {
    const { user } = useAuth();

    return(
        <AppBar position="static" sx={{ backgroundColor: '#1E1E1E' }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <AnalyticsIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Analyz
                </Typography>
                <Stack direction="row">
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    {user ? <AccountMenu /> : <Button color="inherit">Login</Button>}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;