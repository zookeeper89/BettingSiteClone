import dbConnect from "../../utils/db";
import Mongoose from "mongoose";
import UserModel from "../../models/UserModel";
import bcrypt from "bcrypt";

export default async function addUser(req, res) {
  const user = req.body;
  // const user = {email: "kontakt@hagbarths.dk", password: "Hejhej1234-"}
  await dbConnect();



  const checkUser = await UserModel.findOne({ email: user.email });

  if (!checkUser) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);
    const newUser = {email: user.email, password: password, role: user.role};
    const result = await new UserModel(newUser).save();

    res.json(result);
  } else {
    const result = {status:"error", message:"Konto eksisterer allerede - Prøver at logge ind..."};
    res.json(result);
  }

}
