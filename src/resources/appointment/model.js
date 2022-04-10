import parsePhoneNumber from 'libphonenumber-js'
import moment from 'moment'

/*
    A model is a class that provides additional methods for computed properties.

    Some caching libraries allow you to define models for resources which automatically
    wrap the data with the defined model.

*/
export default class AppointmentModel {
    constructor(data) {
        this.data = data
    }

    get clientName() {
        return `${this.data.client_first_name} ${this.data.client_last_name}`
    }

    get phone() {
        const phoneNumber = parsePhoneNumber(this.data.client_phone_number, 'US')

        if (phoneNumber) {
            return phoneNumber.formatNational()
        }

        return this.data.client_phone_number
    }

    get dob() {
        return moment(this.data.patient_dob, "MM-DD-YYYY")
    }
}