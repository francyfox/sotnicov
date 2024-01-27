// Or separate like DDD
import { nanoid } from 'nanoid';

const randomID = () => nanoid(5);
export const canbanMockData = [
  {
    id: randomID(),
    name: 'Development',
    stack: [
      {
        id: randomID(),
        text: 'Task text example'
      },
      {
        id: randomID(),
        text: 'Task text example 2'
      }
    ]
  }
];