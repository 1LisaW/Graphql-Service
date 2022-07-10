import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService {
  client: AxiosInstance;
  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_ARTISTS'),
    });
  }
  async create(
    createArtistInput: CreateArtistInput,
    token: string,
  ): Promise<Artist> {
    try {
      const res = await this.client.post('', createArtistInput, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<Artist[]> {
    try {
      const res = await this.client.get('');
      return res.data.items;
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<Artist> {
    try {
      const res = await this.client.get(`/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async update(
    id: string,
    updateArtistInput: UpdateArtistInput,
    token: string,
  ): Promise<Artist> {
    try {
      const res = await this.client.put(
        `/${id}`,
        { ...updateArtistInput },
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} artist`;
  }
}
