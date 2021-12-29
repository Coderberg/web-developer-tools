import {GENERATE_CRONTAB_LINE} from "../../constants/ActionTypes";

export const setResult = (payload: string) => ({
    type: GENERATE_CRONTAB_LINE, payload
});

export default setResult;
