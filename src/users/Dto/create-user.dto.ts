import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Length,
  IsArray,
} from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;

  @Length(8)
  @IsNotEmpty()
  @Field()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsArray()
  @Field(() => [String!]!, { nullable: false })
  favouriteArtistIds: [string];
}
