import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Album {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  released: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  trackIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];

  @Field(() => String, { nullable: true })
  image: string;
}
