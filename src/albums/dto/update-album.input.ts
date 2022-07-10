import { CreateAlbumInput } from './create-album.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAlbumInput extends PartialType(CreateAlbumInput) {
  @Field(() => String, { nullable: true })
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
