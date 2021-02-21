const mongoose = require('mongoose');

const Book_HotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        default: 0,
        unique: [true, "Duplicate hotel_id Not allowed"],
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
        unique: [true, "Duplicate user_id Not allowed"],
        validate(value) {
            if (value < 0){
                throw new Error("Negative user_id aren't real.");
            }
        }
    },
});

const Book_Hotel = mongoose.model("Book_Hotel", Book_HotelSchema);
module.exports = Book_Hotel;
