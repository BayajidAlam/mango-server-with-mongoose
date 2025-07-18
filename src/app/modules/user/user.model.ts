import { HydratedDocument, model, Schema } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";
import config from "../../../config";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      },
      message: "{VALUE} is not a valid email",
    },
    immutable: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  photo: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
    required: true,
  },
  userStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    required: true,
  },
});

// Pre Hook
userSchema.pre("save", async function (next) {
  const user = this as HydratedDocument<IUser>;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
  }
  next();
});

// Remove password from JSON response
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

// Static method
userSchema.statics.getActiveUsers = async function () {
  return this.find({ userStatus: "active" });
};

// Instance method
userSchema.methods.isSeller = function () {
  return this.role === "seller";
};

// Final model export
const User = model<IUser, UserModel>("User", userSchema);
export default User;
