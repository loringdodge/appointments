import AppointmentModel from './model'

/*
    Example of a simple unit test for an isolated class.
*/
describe('AppointmentModel', () => {
    let params

    beforeEach(() => {
        params = {
            appointment_type: "wellness",
            checkin_time: null,
            client_email: "Murphy.Bogisich@gmail.com",
            client_first_name: "Murphy",
            client_last_name: "Bogisich",
            client_phone_number: "1-290-589-7782",
            clinic_id: "1",
            id: "1",
            patient_breed: "Dutch Smoushond",
            patient_color: "indigo",
            patient_dob: "2020-04-09T20:33:41.120Z",
            patient_name: "Bradley",
            staff_notes: "also wants diet refill",
            start_time: "2022-04-11T16:00:00.000Z",
            status: "booked",
            tech_id: 5,
            vet_id: 2,
        }
    })

    test('should return the clients full name', () => {
        let model = new AppointmentModel(params)

        expect(model.clientName).toBe('Murphy Bogisich')
    });
})