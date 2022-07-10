import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Favourite {
  @Field(() => ID, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  tracksIds: string[];
}
