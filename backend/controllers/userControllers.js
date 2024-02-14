import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  const loggedInUser = req.user._id;
  try {
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
