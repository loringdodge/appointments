import capitalize from 'lodash/capitalize'

export default class EmployeeModel {
    constructor(data) {
        this.data = data
    }

    get fullName() {
        return `${this.data.first_name} ${this.data.last_name}`
    }

    get role() {
        return capitalize(this.data.clinic_role)
    }
}