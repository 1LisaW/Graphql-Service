import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Artist } from 'src/artists/entities/artist.entity';
import { Band } from 'src/bands/entities/band.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Track } from 'src/tracks/entities/track.entity';

@ObjectType()
export class Favourite {
  @Field(() => ID, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  tracksIds: string[];

  @Field(() => [Track], { nullable: 'itemsAndList' })
  tracks: Track[];
}
