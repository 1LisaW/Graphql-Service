import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { BandsService } from 'src/bands/bands.service';
import { GenresService } from 'src/genres/genres.service';
import { ArtistsService } from 'src/artists/artists.service';
import { AlbumsService } from 'src/albums/albums.service';

@Module({
  providers: [
    TracksResolver,
    TracksService,
    BandsService,
    GenresService,
    ArtistsService,
    AlbumsService,
  ],
})
export class TracksModule {}
