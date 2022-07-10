import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'ID of user', nullable: false })
  _id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: false })
  email: string;

  // @Field(() => [String], { nullable: true })
  // favouriteArtistIds: [string];
}
