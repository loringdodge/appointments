import { Fragment } from "react"
import { Scheduler } from "@aldabil/react-scheduler"

import { mapEmployeesToResources, mapAppointmentsToEvents } from './utilities'


export default function Schedule({
    initialDate,
    clinic,
    appointments,
    employees
}) {
    const resources = mapEmployeesToResources(employees, clinic.employees)
    
    const events = resources.length === 0 
        ? [] 
        : mapAppointmentsToEvents(appointments)

    return (
        <Fragment>
            <Scheduler
                view={"day"}
                events={events}
                resources={resources}
                resourceFields={{
                    idField: "admin_id",
                    textField: "title",
                    subTextField: "mobile",
                    avatarField: "title",
                    colorField: "color"
                }}
                resourceViewMode={"default"}
                selectedDate={initialDate}
            />
        </Fragment>
    );
}
