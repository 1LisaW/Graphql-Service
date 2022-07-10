import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { BandsService } from 'src/bands/bands.service';
import { GenresService } from 'src/genres/genres.service';
import { ArtistsService } from 'src/artists/artists.service';
import { TracksService } from 'src/tracks/tracks.service';

@Module({
  providers: [
    FavouritesResolver,
    FavouritesService,
    BandsService,
    GenresService,
    ArtistsService,
    TracksService,
  ],
})
export class FavouritesModule {}
