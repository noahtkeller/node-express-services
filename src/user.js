import { success } from 'common-strings/i18n/keys/system';
import { UserSvc } from 'common-backend/services';

import log from './logger.js';
import app from './express.js';
import { user } from './models.js';
import { wrapController } from './utils.js';

const { PORT = 8000 } = process.env;

UserSvc.models = { user };

const registerCtl = wrapController(async(req, res) => {
    const { email, password } = req.body;
    const user = await UserSvc.register({ email, password });
    res.status(200).json({ message: success, data: user });
});
app.post('/register', registerCtl);

await app.listen(PORT);

log.info(`Listening on port ${PORT}`);
