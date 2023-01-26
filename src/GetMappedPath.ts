import type { GetSwaggerPath } from './GetSwaggerPath';

type GetPathEntity<Paths> = {
  [Path in keyof Paths]: {
    [Method in keyof Paths[Path]]: {
      method: Method;
      path: GetSwaggerPath<Path, Paths[Path][Method]>;
      operation: Paths[Path][Method];
    };
  };
};

type GetEntityPath<Entity> = Entity extends Entity
  ? Entity[keyof Entity]
  : never;

export type GetMappedPath<Paths> = GetPathEntity<Paths> extends infer Entities
  ? Entities[keyof Entities] extends infer Entity
    ? GetEntityPath<Entity>
    : never
  : never;
