import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Int, { nullable: true })
  released: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  trackIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];
}
