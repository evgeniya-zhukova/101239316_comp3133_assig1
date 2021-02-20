const Hotel = require('./models/Hotel');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByID: async (parent, args) => {
            return await Hotel.findById(args.id);
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        }
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(email).toLowerCase())

            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new Hotel({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: args.gender,
                city: args.city,
                designation: args.designation,
                salary: args.salary,
            });
        return await newHotel.save();
      },
      updateHotel: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return;
            }
            return await Hotel.findOneAndUpdate(
            {
                _id: args.id
            },
            {
                $set: {
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    gender: args.gender,
                    city: args.city,
                    designation: args.designation,
                    salary: args.salary
                }
            }, {new: true}, (err, hotel) => {
                if (err)
                {
                    console.log('Something went wrong when updating the hotel');
                } else
                {
                    return hotel
                }
            }
        );
      },
      deleteHotel: async (parent, args) => {
        console.log(args)
        if (!args.id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Hotel.findByIdAndDelete(args.id)
      },
    }
  }
