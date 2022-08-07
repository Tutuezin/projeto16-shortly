import { userRepository } from "../repository/userRepository.js";
export async function getUserUrls(req, res) {
  const { id } = res.locals.user;

  try {
    const { rows: userUrls } = await userRepository.getUrls(id);

    if (userUrls.length === 0) return res.sendStatus(404);

    res.status(200).send(userUrls[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
