import { v4 as uuidv4 } from 'uuid';

const getUUID = () => {
    return uuidv4();
};

const getEventId = () => {
    return getUUID();
};

export { getUUID, getEventId };
