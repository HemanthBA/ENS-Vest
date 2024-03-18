import { Schema, model, models  } from "mongoose";

const UserSchema = new Schema({
    ENSName: {
      type: String,
      unique: [true, 'Ens Name Should be Unique'],
      required: [true, 'ENS name is required!'],
    },
    publicAddress: {
      type: String,
      required: [true, 'Public Address is required!']
    }
    }
  );

const User = model("User", UserSchema);

export default User;