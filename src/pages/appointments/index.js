import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import moment from 'moment'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ClinicAppointments from '../../components/ClinicAppointments'
import ClinicSelect from '../../components/ClinicSelect'

import ClinicService from '../../resources/clinic/service'

/*
    Renders the generalized appointments page for the given day.

    Users may change the calender for a given clinic by using <ClinicSelect> and
    the calendar is displayed via <ClinicAppointments> -- separated out so that
    it can be displayed in other parts of the application.
*/
export default function Appointments() {
    /*
        The provided :clinicId is accessed using useParams and the rest of the page reacts
        to changes for the parameter.

        http://localhost:3000/schedules/:clinicId
    */
    let params = useParams()

    let [clinics, setClinics] = useState()

    let [selectedClinic, setSelectedClinic] = useState(params?.clinicId)

    // Date is hardcoded
    let dateMoment = moment("04-11-2022")
    let date = dateMoment.toDate()
    let dateFormatted = dateMoment.format('MM/DD/YYYY')

    useEffect(() => {
        // useEffect doesn't support async/await so we define fetchData and invoke fetchData
        const fetchData = async () => {
            let clinic = new ClinicService()

            const data = await clinic.list()
        
            setClinics(data)
        }
    
        fetchData()
    }, [])

    let activeClinic = clinics && clinics.find(clinic => clinic?.data?.id === selectedClinic)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography 
                            variant="h5" 
                            component="div" 
                            sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold' }}
                        >
                            Appointments - {dateFormatted}
                        </Typography>
                        {clinics && (
                            <ClinicSelect
                                initialValue={params?.clinicId}
                                clinics={clinics && clinics} 
                                onClick={setSelectedClinic}
                            />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <ClinicAppointments
                        date={date}
                        clinic={activeClinic}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
