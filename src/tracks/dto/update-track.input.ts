import { CreateTrackInput } from './create-track.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTrackInput extends PartialType(CreateTrackInput) {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  albumId: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];
}
