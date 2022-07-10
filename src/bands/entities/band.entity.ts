import { ObjectType, Field } from '@nestjs/graphql';
import { CreateArtistInput } from 'src/artists/dto/create-artist.input';
import { Artist } from 'src/artists/entities/artist.entity';

@ObjectType()
export class Members {
  @Field(() => String, { nullable: true })
  artist: string;

  @Field(() => String, { nullable: true })
  instrument: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  years: string[];
}

@ObjectType()
export class Band {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  origin: string;

  @Field(() => [Members], { nullable: 'itemsAndList' })
  members: Members[];

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => [String], { nullable: true })
  genresIds: string[];
}
