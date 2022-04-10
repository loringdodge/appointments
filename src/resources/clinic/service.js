import axios from 'axios'
import ClinicModel from './model'


export default class ClinicService {
    async list() {
        let req = await axios({
            method: 'get',
            url: 'https://61a576964c822c001704220b.mockapi.io/api/v1/clinics',
        })
        return req?.data?.map(datum => new ClinicModel(datum))
    }

    async get(id) {
        // pass
    }

    async post(body) {
        // pass
    }

    async patch(id, body) {
        // pass
    }

    async delete(id) {
        // pass
    }
}