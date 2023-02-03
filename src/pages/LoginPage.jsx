import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../providers/AuthProvider";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8
    }
}

const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login(data.get('email'), data.get('password'));
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={styles.container}>
                <Avatar sx={{ margin: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleLogin}  sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                    />
                    
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"   
                        sx={{ mt: 3, mb: 2 }}                     
                    >
                        Sign In
                    </Button>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Box>
            </Box>
        </Container>
    );
}
export default LoginPage;