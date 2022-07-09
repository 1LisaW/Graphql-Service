import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { join } from 'path';
import { configValidationSchema } from './config.schema';

interface Request {
  req: {
    headers: {
      authorization: string;
    };
  };
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationSchema: configValidationSchema,
      validationOptions: {
        // allowUnknown: false,
        abortEarly: true,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      context: async ({ req }: Request) => {
        const token: string = req.headers.authorization || '';
        console.log('app.modules', req.headers);
        return {
          token,
        };
      },

      playground: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
