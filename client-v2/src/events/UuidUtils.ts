import { v4 as uuidv4 } from 'uuid';

const getUUID = () => uuidv4();

const getEventId = () => getUUID();

export { getUUID, getEventId };
