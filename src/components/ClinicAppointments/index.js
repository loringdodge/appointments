import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import isEmpty from 'lodash/isEmpty'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'

import ClinicInfo from './components/ClinicInfo'
import EmployeeList from './components/EmployeeList'
import Scheduler from './components/Scheduler'

import AppointmentService from '../../resources/appointment/service'

/*
    Given a date (the day the calendar should be set to) and a clinic (clinic object),
    display all appointments for the given clinic and allow it to be filtered by employees
*/
export default function ClinicAppointments({
    date,
    clinic
}) {
    /*
        When employees are selected, a new URL param is added so that calendar state can be
        persisted on refresh

        http://localhost:3000/schedules/1?employees=3,4,5,6
    */
    const [searchParams, setSearchParams] = useSearchParams()

    const employeesParams = !isEmpty(searchParams.get('employees'))
        ? searchParams.get('employees').split(',')
        : []

    const [appointments, setAppointments] = useState()
    const [selectedEmployees, setSelectedEmployees] = useState(employeesParams)

    useEffect(() => {
        // useEffect doesn't support async/await so we define fetchData and invoke fetchData
        const fetchData = async () => {
            let appointment = new AppointmentService()

            const data = await appointment.list()
        
            setAppointments(data)
        }
    
        fetchData()
    }, [])

    const onEmployeeSelect = (values) => {
        setSelectedEmployees(values)
        setSearchParams({
            employees: values.join(',')
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <Card>
                    {clinic && (
                        <>
                            <ClinicInfo 
                                clinic={clinic} 
                            />
                            <Divider />
                            <EmployeeList 
                                employees={clinic?.employees || []}
                                selectedEmployees={selectedEmployees}
                                onSelect={onEmployeeSelect}
                            />
                        </>
                    )}
                </Card>
            </Grid>
            <Grid item xs={6} md={9}>
                <Card sx={{ padding: 1 }}>
                    {clinic && appointments && (
                        <Scheduler
                            initialDate={date}
                            clinic={clinic}
                            appointments={appointments}
                            employees={selectedEmployees}
                        />
                    )}
                </Card>
            </Grid>
        </Grid>
    )
}
