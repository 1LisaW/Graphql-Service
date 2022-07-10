import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Album } from 'src/albums/entities/album.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Band } from 'src/bands/entities/band.entity';
import { Genre } from 'src/genres/entities/genre.entity';

@ObjectType()
export class Track {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  albumId: string;

  @Field(() => Album, { nullable: true })
  album: Album;

  @Field(() => [String], { nullable: 'itemsAndList' })
  bandsIds: string[];

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  artistsIds: string[];

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [String], { nullable: 'itemsAndList' })
  genresIds: string[];

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];
}
