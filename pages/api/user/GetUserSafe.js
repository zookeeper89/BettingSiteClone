import dbConnect from "utils/db";
import UserModel from "models/UserModel";
import { getSession } from "next-auth/react";

export default async function getUser(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  try {
    const result = await UserModel.findById(session.user.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ status: "error", message: "test" });
  }
}
