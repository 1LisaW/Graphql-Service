import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { Track } from './entities/track.entity';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { ContextType } from '@nestjs/common';
import { RemoveTrack } from './entities/remove.entity';
import { BandsService } from 'src/bands/bands.service';
import { Band } from 'src/bands/entities/band.entity';
import { GenresService } from 'src/genres/genres.service';
import { ArtistsService } from 'src/artists/artists.service';
import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Album } from 'src/albums/entities/album.entity';
import { AlbumsService } from 'src/albums/albums.service';

@Resolver(() => Track)
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Mutation(() => Track)
  createTrack(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.tracksService.create(createTrackInput, context.token);
  }

  @Query(() => [Track], { name: 'tracks' })
  findAll() {
    return this.tracksService.findAll();
  }

  @Query(() => Track, { name: 'track' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation(() => Track)
  updateTrack(
    @Args('id', { type: () => String }) id: string,
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.tracksService.update(id, updateTrackInput, context.token);
  }

  @Mutation(() => RemoveTrack)
  removeTrack(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.tracksService.remove(id, context.token);
  }

  @ResolveField('bands', () => [Band])
  async resolveBands(@Parent() parent: Track) {
    const { bandsIds } = parent;
    const bands = [];

    for (const id of bandsIds) {
      const band = await this.bandsService.findOne(id);
      if (band) bands.push(band);
    }

    console.log('?', bandsIds, bands);
    return bands;
  }
  @ResolveField('genres', () => [Genre])
  async resolveGenres(@Parent() parent: Track) {
    const { genresIds } = parent;
    const genres = [];

    for (const id of genresIds) {
      const genre = await this.genresService.findOne(id);
      if (genre) genres.push(genre);
    }

    return genres;
  }

  @ResolveField('artists', () => [Artist])
  async resolveArtists(@Parent() parent: Track) {
    const { artistsIds } = parent;
    const artists = [];

    for (const id of artistsIds) {
      const artist = await this.artistsService.findOne(id);
      if (artist) artists.push(artist);
    }

    return artists;
  }

  @ResolveField('album', () => Album)
  async resolveAlbum(@Parent() parent: Track) {
    const { albumId } = parent;

    const album = await this.albumsService.findOne(albumId);

    return album;
  }
}
