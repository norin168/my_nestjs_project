// import { z } from 'zod';

import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

// export const headerSchema = z
//   .object({
//     'access-token': z.string(),
//   })
//   .required();

// export type HeaderZodDto = z.infer<typeof headerSchema>;

export class HeaderDto {
  @IsString()
  @Expose({ name: 'access-token' })
  accessToken: string;
}
