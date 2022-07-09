import { IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  public _id: string;

  // @IsNumber()
  // __v: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsNotEmpty()
  favouriteArtistIds?: [string];
}
