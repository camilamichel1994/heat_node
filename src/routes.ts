import { Router } from "express";
import AuthenticateUserController from "./controllers/AuthenticateUserController";
import CreateMessageController from "./controllers/CreateMessageController";
import GetLastThreeMessagesController from "./controllers/GetLastThreeMessagesController";
import ProfileUserController from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})
router.get("/signin/callback", (request, response) => {
    const { code } = request.query;
    return response.json(code);
})

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last", ensureAuthenticated, new GetLastThreeMessagesController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export default router;