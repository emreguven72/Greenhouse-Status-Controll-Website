import { Box, Container, Grid } from "@mui/material";
import GreenhouseCard from "../components/GreenhouseCard";

const HomePage = () => {

    return(
        <Container component="main" maxWidth="xl">
            <Box sx={{ flexGrow: 1, marginTop: 5 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={2} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <GreenhouseCard />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default HomePage;