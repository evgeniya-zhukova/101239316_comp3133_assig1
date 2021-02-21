const mongoose = require('mongoose');

const BookHotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        default: 0,
        required: true,
        validate(value) {
            if (value < 0){
                throw new Error("Negative hotel_id aren't real.");
            }
        }
    },
    booking_date: {
        type: Date,
        required: true,
        trim: true
    },
    booking_start: {
        type: Date,
        required: true,
        trim: true
    },
    booking_end: {
        type: Date,
        required: true,
        trim: true
    },
    user_id: {
        type: Number,
        default: 0,
        required: true,
        validate(value) {
            if (value < 0){
                throw new Error("Negative user_id aren't real.");
            }
        }
    },
});

const BookHotel = mongoose.model("BookHotel", BookHotelSchema);
module.exports = BookHotel;
