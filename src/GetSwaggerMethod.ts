import type { DefaultPath } from './defaults';

export type GetSwaggerMethod<MappedPath, SwaggerPath> =
  MappedPath extends DefaultPath
    ? SwaggerPath extends MappedPath['path']
      ? MappedPath['method']
      : never
    : never;
