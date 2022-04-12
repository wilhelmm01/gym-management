const { Trainer, User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        trainers: async () => {
            return Trainer.find().sort({ hiredOn: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('trainers')
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('trainers')
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
        login: async (parent, { email, password }) => {
        const user = await User.findOne( { email });
        if (!user) {
            throw new AuthenticationError('Incorrect credentials')
        }
        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw) {
            throw new AuthenticationError('Incorrect credentials')
        }
        const token = signToken(user);
        return { token, user };
    }
  }
};

//might have to add a 'addTrainer' to show specific trainers tied to specific users

module.exports = resolvers;