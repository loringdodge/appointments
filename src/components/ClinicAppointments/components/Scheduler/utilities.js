import moment from 'moment'

import { colors } from './constants'

/*
    A set of utility functions that help support the <Scheduler> component
*/

export function mapEmployeesToResources(selected, employees) {
    return selected.map((employeeId, i) => {
        let employee = employees.find(e => e?.data?.id === employeeId)

        return {
            admin_id: parseInt(employee?.data?.id),
            title: employee.fullName,
            mobile: employee.role,
            color: colors[i]
        }
    })
}

export function mapAppointmentsToEvents(appointments) {
    return appointments.map(appointment => {
        let startTime = new Date(appointment?.data?.start_time)

        return {
            event_id: parseInt(appointment?.data?.id),
            title: appointment?.data?.patient_name,
            start: startTime,
            end: moment(startTime).add(30, 'm').toDate(),
            admin_id: appointment?.data?.tech_id
          }
    })
}