import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(5432).required(),
  URL_GENRES: Joi.string()
    .default('http://localhost:3001/v1/genres')
    .required(),
  URL_ARTISTS: Joi.string()
    .default('http://localhost:3002/v1/artists')
    .required(),
  URL_BANDS: Joi.string().default('http://localhost:3003/v1/bands').required(),
  URL_USER: Joi.string().default('http://localhost:3004/v1/users').required(),
  URL_ALBUMS: Joi.string()
    .default('http://localhost:3005/v1/albums')
    .required(),
  URL_TRACKS: Joi.string()
    .default('http://localhost:3006/v1/tracks')
    .required(),
  URL_FAVORITES: Joi.string()
    .default('http://localhost:3007/v1/favourites')
    .required(),
});
