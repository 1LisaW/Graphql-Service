import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre } from './entities/genre.entity';
import { RemoveGenre } from './entities/remove.entity';

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

  async update(id: string, updateGenreInput: UpdateGenreInput, token) {
    try {
      const res = await this.client.put(`/${id}`, updateGenreInput, {
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

  async remove(id: string, token): Promise<RemoveGenre> {
    try {
      const res = await this.client.delete(`/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
