import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';
import { GenresService } from 'src/genres/genres.service';

@Module({
  providers: [BandsResolver, BandsService, GenresService],
})
export class BandsModule {}
