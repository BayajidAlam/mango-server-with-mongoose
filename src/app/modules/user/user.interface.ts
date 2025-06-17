import { Model } from "mongoose";

export type TUserRole = 'customer' | 'seller';
export type TUserStatus = 'active' | 'inactive';

export interface IUser {
  name: string;
  email: string;
  password: string;
  photo?: string | null;
  role: TUserRole;
  userStatus: TUserStatus;
}

// Instance methods
export interface IUserMethods {
  isSeller(): boolean;
}

// Static methods
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getActiveUsers(): Promise<IUser[]>;
}
