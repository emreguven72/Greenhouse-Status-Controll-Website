import { Box } from "@mui/material";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
    return(
        <Box sx={{ backgroundColor: '#1A2027', width: '100vw', height: '100vh' }}>
            <Navbar />
            {children}
        </Box>
    );
}
export default Layout;