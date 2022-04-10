import EmployeeModel from '../employee/model'
import parsePhoneNumber from 'libphonenumber-js'

export default class ClinicModel {
    constructor(data) {
        this.data = data
    }

    get employees() {
        return this.data.employees.map(employee => new EmployeeModel(employee))
    }

    get phone() {
        const phoneNumber = parsePhoneNumber(this.data.phone, 'US')

        if (phoneNumber) {
            return phoneNumber.formatNational()
        }

        return this.data.phone
    }
}