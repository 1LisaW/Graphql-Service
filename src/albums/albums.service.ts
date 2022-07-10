import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  private client: AxiosInstance;

  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_ALBUMS'),
    });
  }
  async create(
    createAlbumInput: CreateAlbumInput,
    token: string,
  ): Promise<Album> {
    try {
      const res = await this.client.post('', createAlbumInput, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async findAll(): Promise<Album[]> {
    try {
      const res = await this.client.get('');
      return res.data.items;
    } catch (err) {
      console.error(err);
    }
  }

  async findOne(id: string): Promise<Album> {
    try {
      const res = await this.client.get(`${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  update(id: number, updateAlbumInput: UpdateAlbumInput) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
