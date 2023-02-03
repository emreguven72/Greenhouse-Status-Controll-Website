import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8
    }
}

const SignUpPage = () => {

    const signup = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('fullName'))
        console.log(data.get('email'));
        console.log(data.get('password'))
        console.log(data.get('phoneNumber'))
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
                <Box component="form" onSubmit={signup}  sx={{ mt: 1 }}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                    />
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"   
                        sx={{ mt: 3, mb: 2 }}                     
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
export default SignUpPage;