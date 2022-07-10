import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { ContextType } from '@nestjs/common';
import { RemoveFavourite } from './entities/remove.entity';
import { Band } from 'src/bands/entities/band.entity';
import { BandsService } from 'src/bands/bands.service';
import { GenresService } from 'src/genres/genres.service';
import { ArtistsService } from 'src/artists/artists.service';
import { TracksService } from 'src/tracks/tracks.service';
import { Genre } from 'src/genres/entities/genre.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Track } from 'src/tracks/entities/track.entity';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
    private readonly tracksService: TracksService,
  ) {}

  @Mutation(() => Favourite)
  addTrackToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'tracks',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addBandToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'bands',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addArtistToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'artists',
      createFavouriteInput,
      context.token,
    );
  }

  @Mutation(() => Favourite)
  addGenreToFavourites(
    @Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput, // id
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.create(
      'genres',
      createFavouriteInput,
      context.token,
    );
  }

  @Query(() => Favourite, { name: 'favourites' })
  findOne(
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.findOne(context.token);
  }

  @Mutation(() => RemoveFavourite)
  removeFavourite(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.favouritesService.remove(id, context.token);
  }

  @ResolveField('bands', () => [Band])
  async resolveBands(@Parent() parent: Favourite) {
    const { bandsIds } = parent;
    const bands = [];

    for (const id of bandsIds) {
      const band = await this.bandsService.findOne(id);
      if (band) bands.push(band);
    }

    return bands;
  }

  @ResolveField('genres', () => [Genre])
  async resolveGenres(@Parent() parent: Favourite) {
    const { genresIds } = parent;
    const genres = [];

    for (const id of genresIds) {
      const genre = await this.genresService.findOne(id);
      if (genre) genres.push(genre);
    }

    return genres;
  }

  @ResolveField('artists', () => [Artist])
  async resolveArtists(@Parent() parent: Favourite) {
    const { artistsIds } = parent;
    const artists = [];

    for (const id of artistsIds) {
      const artist = await this.artistsService.findOne(id);
      if (artist) artists.push(artist);
    }

    return artists;
  }

  @ResolveField('tracks', () => [Track])
  async resolveTracks(@Parent() parent: Favourite) {
    const { tracksIds } = parent;
    const tracks = [];

    for (const id of tracksIds) {
      const track = await this.tracksService.findOne(id);
      if (track) tracks.push(track);
    }

    return tracks;
  }
}
