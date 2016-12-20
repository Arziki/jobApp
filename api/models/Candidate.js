/**
 * Candidate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        first_name: {
            type: 'string',
            required: true
        },
        last_name: {
            type: 'string',
            required: true
        },
        date_of_birth: {
            type: 'string',
            required: true
        },
        gender: {
            type: 'string',
            required: true
        },
        interest: {
            type: 'string',
            required: false
        }
    }
};