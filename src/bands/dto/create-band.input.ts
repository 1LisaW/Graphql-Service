import { InputType, Field } from '@nestjs/graphql';
// import { Members } from '../entities/band.entity';
// import { Artist } from 'src/artists/entities/artist.entity';

@InputType()
export class MembersInput {
  @Field(() => String, { nullable: true })
  artist: string;

  @Field(() => String, { nullable: true })
  instrument: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  years: string[];
}

@InputType()
export class CreateBandInput {
  @Field(() => String, { nullable: false })
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
