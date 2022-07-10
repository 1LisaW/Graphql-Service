import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { Track } from './entities/track.entity';

@Injectable()
export class TracksService {
  client: AxiosInstance;
  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_TRACKS'),
    });
  }

  async create(
    createTrackInput: CreateTrackInput,
    token: string,
  ): Promise<Track> {
    try {
      const res = await this.client.post('', createTrackInput, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<Track[]> {
    try {
      const res = await this.client.get('');
      return res.data.items;
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<Track> {
    try {
      const res = await this.client.get(`/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  update(id: number, updateTrackInput: UpdateTrackInput) {
    return `This action updates a #${id} track`;
  }

  remove(id: number) {
    return `This action removes a #${id} track`;
  }
}
