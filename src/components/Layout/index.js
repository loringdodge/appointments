import { Outlet } from "react-router-dom"

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


/*
    Generalized layout that all subroutes inherit from.

    It's a combination of the default view from create-react-app and
    components from Material UI.
*/
export default function Layout() {
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                            component="div" 
                            sx={{ flexGrow: 1, textAlign: 'left' }}
                        >
                            Scheduler
                        </Typography>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box 
                        mt={4}
                        sx={{ height: 'calc(100vh - 61px)' }}
                    >
                        <Outlet />
                    </Box>
                </Container>
            </Box>
        </div>
    )
}