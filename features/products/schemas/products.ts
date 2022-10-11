import * as z from 'zod';

export const schema = z.object({
  id: z.number(),
  description: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
});

export default z.array(schema);
