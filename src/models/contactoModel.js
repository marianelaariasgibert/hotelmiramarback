const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    lastname: {
        type: 'string',
        required: true
    },    
    email: {
        type:'string',
        required: true
    },
    phone: {
        type: 'string',
        required: true
    },
    comments: {
        type:'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Contact = mongoose.model('contact', contactSchema)

module.exports = Contact;