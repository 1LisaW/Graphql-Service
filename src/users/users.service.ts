import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreateUserInput } from './Dto/create-user.dto';
import { LoginInput } from './Dto/login.dto';
import { User } from './Entity/user.entity';
import { Jwt } from './Entity/jwt.entity';
// import { getAccessToken, setAuthTokens } from 'axios-jwt';

@Injectable()
export class UsersService {
  private client: AxiosInstance;

  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('URL_USER'),
    });
  }
  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const res = await this.client.post('/register', createUserInput);
      console.log('res', res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const res = await this.client.get(`/${id}`);
      console.log('res', res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async login(loginInput: LoginInput): Promise<Jwt> {
    try {
      const res = await this.client.post('/login', loginInput);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async verify(token: string): Promise<User | null> {
    try {
      const res = await this.client.get(`/verify`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
