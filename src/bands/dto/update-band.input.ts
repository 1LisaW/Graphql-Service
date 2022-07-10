import { CreateBandInput, MembersInput } from './create-band.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
// import { Members } from '../entities/band.entity';

import { CreateArtistInput } from 'src/artists/dto/create-artist.input';

// @InputType()
// class Members {
//   @Field(() => String, { nullable: true })
//   artist: string;

//   @Field(() => String, { nullable: true })
//   instrument: string;

//   @Field(() => [String], { nullable: 'itemsAndList' })
//   years: string[];
// }

@InputType()
export class UpdateBandInput extends PartialType(CreateBandInput) {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  origin: string;

  @Field(() => [MembersInput], { nullable: 'itemsAndList' })
  members: MembersInput[];

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => [String], { nullable: true })
  genresIds: string[];
}
