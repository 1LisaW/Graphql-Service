import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { RemoveBand } from './entities/remove.entity';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { Band } from './entities/band.entity';

@Injectable()
export class BandsService {
  private client: AxiosInstance;

  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_BANDS'),
    });
  }
  async create(createBandInput: CreateBandInput, token: string): Promise<Band> {
    try {
      const res = await this.client.post('', createBandInput, {
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

  async findAll(): Promise<Band[]> {
    try {
      const res = await this.client.get('');
      return res.data.items;
    } catch (err) {
      console.error(err);
    }
  }

  async findOne(id: string): Promise<Band> {
    try {
      const res = await this.client.get(`${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async update(id: string, updateBandInput: UpdateBandInput, token) {
    try {
      const res = await this.client.put(`${id}`, updateBandInput, {
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

  async remove(id: string, token): Promise<RemoveBand> {
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
