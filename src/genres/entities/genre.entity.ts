import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => ID, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => String, { nullable: true })
  year: string;
}
