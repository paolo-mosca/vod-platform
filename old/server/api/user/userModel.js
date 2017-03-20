import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  isAdmin: {
    type: Boolean
  }
});

UserSchema.plugin(idPlugin)
UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('user', UserSchema);
