import { IsEmail, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;
}
