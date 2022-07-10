import { ObjectType, Field } from '@nestjs/graphql';
import { Artist } from 'src/artists/entities/artist.entity';
import { Band } from 'src/bands/entities/band.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Track } from 'src/tracks/entities/track.entity';

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

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  trackIds: string[];

  @Field(() => [Track], { nullable: 'itemsAndList' })
  track: Track[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];

  @Field(() => String, { nullable: true })
  image: string;
}
