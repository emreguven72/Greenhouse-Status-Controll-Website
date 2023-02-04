import React, { useEffect } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import GreenhouseCard from "../components/GreenhouseCard";
import { useAuth } from "../providers/AuthProvider";

const HomePage = () => {
    const { greenhouses, resetAuthGreenHouses } = useAuth();

    const random = (index) => {
        console.log(greenhouses[index]);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            resetAuthGreenHouses()
        },5000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    return(
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, marginTop: 5 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {[...greenhouses].sort((a,b) => a.id - b.id).map((greenHouse, index) => (
                        <Grid item xs={8} sm={4} md={4} key={greenHouse.id}>
                            <GreenhouseCard 
                                onClick={() => {random(index)}} 
                                temperature={greenHouse.temperature} 
                                humidity={greenHouse.humidity} 
                                name={greenHouse.name} 
                                address={greenHouse.address} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}
export default HomePage;