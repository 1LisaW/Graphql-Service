import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';
import { BandsService } from 'src/bands/bands.service';

@Module({
  providers: [ArtistsResolver, ArtistsService, BandsService],
})
export class ArtistsModule {}
