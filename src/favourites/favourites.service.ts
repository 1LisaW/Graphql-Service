import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { RemoveFromFavouriteInput } from './dto/remove-from-favourite.input';
import { Favourite } from './entities/favourite.entity';
import { RemoveFavourite } from './entities/remove.entity';

@Injectable()
export class FavouritesService {
  client: AxiosInstance;
  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_FAVORITES'),
    });
  }
  async create(
    createFavouriteInput: CreateFavouriteInput,
    token: string,
  ): Promise<Favourite> {
    try {
      const res = await this.client.put('/add', createFavouriteInput, {
        headers: {
          authorization: token,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(token: string): Promise<Favourite> {
    try {
      const res = await this.client.get('', {
        headers: {
          authorization: token,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  // update(id: number, removeFromFavouriteInput: RemoveFromFavouriteInput) {
  //   return `This action updates a #${id} favourite`;
  // }

  async remove(id: string, token): Promise<RemoveFavourite> {
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
