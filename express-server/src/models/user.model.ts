import mongoose from "mongoose";
import config from "config";
import bcrypt from "bcrypt";

export interface UserInput {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
}