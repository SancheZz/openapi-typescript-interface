import type { GetMappedPath } from './GetMappedPath';
import type { GetSwaggerMethod } from './GetSwaggerMethod';
import type { GetSwaggerHeaders } from './GetSwaggerHeaders';
import type { GetSwaggerResponse } from './GetSwaggerResponse';
import type { GetSwaggerSearchParams } from './GetSwaggerSearchParams';
import type { GetSwaggerRequestBody } from './GetSwaggerRequestBody';
import type { GetPathEntity } from './GetPathEntity';
import type { DefaultPath } from './defaults';

export type GetSwaggerInterface<
  paths,
  MappedPath extends DefaultPath = GetMappedPath<paths>,
> = <
  SwaggerPath extends MappedPath['path'],
  SwaggerMethod extends GetSwaggerMethod<MappedPath, SwaggerPath>,
  FoundPath = GetPathEntity<MappedPath, SwaggerPath, SwaggerMethod>,
>(
  options: {
    path: SwaggerPath;
    method: SwaggerMethod;
    signal?: AbortSignal | null;
  } & GetSwaggerHeaders<FoundPath> &
    GetSwaggerSearchParams<FoundPath> &
    GetSwaggerRequestBody<FoundPath>,
) => Promise<GetSwaggerResponse<FoundPath>>;
