import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { BandsService } from 'src/bands/bands.service';
import { GenresService } from 'src/genres/genres.service';
import { TracksService } from 'src/tracks/tracks.service';
import { ArtistsService } from 'src/artists/artists.service';

@Module({
  providers: [
    AlbumsResolver,
    AlbumsService,
    BandsService,
    GenresService,
    ArtistsService,
    TracksService,
  ],
})
export class AlbumsModule {}
