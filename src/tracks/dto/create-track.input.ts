import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTrackInput {
  @Field(() => String, { nullable: false })
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
