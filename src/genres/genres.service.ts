import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  client: AxiosInstance;
  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_GENRES'),
    });
  }

  async create(
    createGenreInput: CreateGenreInput,
    token: string,
  ): Promise<Genre> {
    try {
      const res = await this.client.post('', createGenreInput, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<Genre[]> {
    try {
      const res = await this.client.get('');
      return res.data.items;
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<Genre> {
    try {
      const res = await this.client.get(`/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  update(id: string, updateGenreInput: UpdateGenreInput) {
    return `This action updates a #${id} genre`;
  }

  remove(id: string) {
    return `This action removes a #${id} genre`;
  }
}
