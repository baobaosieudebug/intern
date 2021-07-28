import { ApiProperty } from '@nestjs/swagger';

export class UserRO {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  avatar: string;

  @ApiProperty({ type: String })
  status: string;
}
