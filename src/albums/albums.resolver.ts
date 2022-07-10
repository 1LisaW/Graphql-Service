import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Context,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ContextType } from '@nestjs/common';
import { RemoveAlbum } from './entities/remove.entity';
import { BandsService } from 'src/bands/bands.service';
import { Band } from 'src/bands/entities/band.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { GenresService } from 'src/genres/genres.service';
import { ArtistsService } from 'src/artists/artists.service';
import { TracksService } from 'src/tracks/tracks.service';
import { Track } from 'src/tracks/entities/track.entity';
import { Artist } from 'src/artists/entities/artist.entity';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
    private readonly tracksService: TracksService,
  ) {}

  @Mutation(() => Album)
  createAlbum(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() context: ContextType & { token: string },
  ) {
    return this.albumsService.create(createAlbumInput, context.token);
  }

  @Query(() => [Album], { name: 'albums' })
  findAll() {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation(() => Album)
  updateAlbum(
    @Args('id', { type: () => String }) id: string,
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context() context: ContextType & { token: string },
  ) {
    return this.albumsService.update(id, updateAlbumInput, context.token);
  }

  @Mutation(() => RemoveAlbum)
  removeAlbum(
    @Args('id', { type: () => String }) id: string,
    @Context()
    context: ContextType & { token: string },
  ) {
    return this.albumsService.remove(id, context.token);
  }

  @ResolveField('bands', () => [Band])
  async resolveBands(@Parent() parent: Album) {
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
  async resolveGenres(@Parent() parent: Album) {
    const { genresIds } = parent;
    const genres = [];

    for (const id of genresIds) {
      const genre = await this.genresService.findOne(id);
      if (genre) genres.push(genre);
    }

    return genres;
  }

  @ResolveField('artists', () => [Artist])
  async resolveArtists(@Parent() parent: Album) {
    const { artistsIds } = parent;
    const artists = [];

    for (const id of artistsIds) {
      const artist = await this.artistsService.findOne(id);
      if (artist) artists.push(artist);
    }

    return artists;
  }

  @ResolveField('tracks', () => [Track])
  async resolveTracks(@Parent() parent: Album) {
    const { trackIds } = parent;
    const tracks = [];

    for (const id of trackIds) {
      const track = await this.tracksService.findOne(id);
      if (track) tracks.push(track);
    }

    return tracks;
  }
}
