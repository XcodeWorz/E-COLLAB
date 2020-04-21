import mongoose from 'mongoose'
import { hash, compare } from 'bcryptjs'
import { number } from 'joi'
import { makeExecutableSchema } from 'graphql-tools';


const calendarSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    year: {
        type : Number,
        required: true,
       
    },
    month:{
        type: Number,
        required: true,
        
       
    },
    day:{
        type: Number,
        required: true,
        
    },
    events:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }]
    },workShops:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'workShop'
        }]
    },
    
}, {
    timestamps: true
})
const Calendar = mongoose.model('calendar', calendarSchema)

export default Calendar