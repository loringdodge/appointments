import axios from 'axios'
import AppointmentModel from './model'

/*
    A service is just a generalized class for operating on the Appointment resource.

    In a production environment, this would be replaced by a caching mechanism such as
    Apollo which stores queries in a normalized cache (identified by ID).

    Using a caching mechanism would:

    - remove the need to send a network request on every call
    - promote immutability of the data
    - automatically update data when a post/patch/delete is called on the resource
      and subsequently refresh the cache

*/
export default class AppointmentService {
    async list(clinicId) {
        let req = await axios({
            method: 'get',
            url: 'https://61a576964c822c001704220b.mockapi.io/api/v1/clinics/1/appointment',
        })
        return req?.data?.map(datum => new AppointmentModel(datum))
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