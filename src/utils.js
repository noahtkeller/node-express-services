import { internal_server_error } from 'common-strings/i18n/keys/errors';

export function wrapController(ctl) {
    return async(req, res, next) => {
        try {
            await ctl(req, res, next);
        } catch (e) {
            const { code = 500, message = internal_server_error } = e;
            res.status(code).json({ message });
        }
    }
}
