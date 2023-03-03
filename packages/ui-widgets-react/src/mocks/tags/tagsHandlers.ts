import { rest } from 'msw';

import {
  TAGS_ENDPOINT,
  TagsPaginationResponse,
  TagCreateOrUpdateSchema,
  TagReadSchema,
} from '@team-monite/sdk-api';

import { tagListFixture } from './tagsFixture';

const tagsPath = `*/${TAGS_ENDPOINT}`;

export const tagsHandlers = [
  // read tag list
  rest.get<undefined, {}, TagsPaginationResponse>(
    tagsPath,
    ({ url }, res, ctx) => {
      return res(
        ctx.json({
          data: tagListFixture,
        })
      );
    }
  ),

  // read tag list with limit
  // TODO should combine with above handler using path params
  rest.get<undefined, {}, TagsPaginationResponse>(
    `${tagsPath}?limit=10`,
    ({ url }, res, ctx) => {
      return res(
        ctx.json({
          data: tagListFixture,
        })
      );
    }
  ),

  // create tag
  rest.post<TagCreateOrUpdateSchema, {}, TagReadSchema>(
    tagsPath,
    ({ params }, res, ctx) => {
      return res(ctx.json(tagListFixture[0]));
    }
  ),

  // update tag
  rest.patch<TagCreateOrUpdateSchema, {}, TagReadSchema>(
    `${tagsPath}/:id`,
    ({ params }, res, ctx) => {
      return res(ctx.json(tagListFixture[0]));
    }
  ),

  // delete tag
  rest.delete<TagCreateOrUpdateSchema, {}, TagReadSchema>(
    `${tagsPath}/:id`,
    ({ params }, res, ctx) => {
      return res(ctx.status(204));
    }
  ),
];
