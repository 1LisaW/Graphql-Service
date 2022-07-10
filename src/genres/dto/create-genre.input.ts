import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => Int, { nullable: true })
  year: string;
}
