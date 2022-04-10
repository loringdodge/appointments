import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function ClinicInfo({
    clinic,
}) {
    return (
        <Box p={2} sx={{ textAlign: 'left' }}>
            <Typography variant="h6">
                {clinic?.data?.name}
            </Typography>
            <Typography color="text.secondary">
                {clinic?.data?.email}
            </Typography>
            <Typography color="text.secondary">
                {clinic.phone}
            </Typography>
            <Typography color="text.secondary">
                {clinic?.data?.status}
            </Typography>
        </Box>
    )
}