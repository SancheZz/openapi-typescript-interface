import type { DefaultPath } from './defaults';

export type GetPathEntity<MappedPath, Path, Method> =
  MappedPath extends DefaultPath
    ? Path extends MappedPath['path']
      ? MappedPath['method'] extends Method
        ? MappedPath
        : never
      : never
    : never;
