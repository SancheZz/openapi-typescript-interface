type PathParameters = Record<string, string | number>;

type Operation = {
  parameters: {
    path: PathParameters;
  };
};

type GetUserPath<
  Path,
  SwaggerParameters,
  Result extends string = '',
> = Path extends string
  ? Path extends `${infer Prepend}{${infer Param}}${infer Append}`
    ? SwaggerParameters extends PathParameters
      ? Param extends keyof SwaggerParameters
        ? GetUserPath<
            Append,
            SwaggerParameters,
            `${Result}${Prepend}${SwaggerParameters[Param]}`
          >
        : never
      : never
    : `${Result}${Path}`
  : never;

export type GetSwaggerPath<SwaggerPath, SwaggerOperation> =
  SwaggerOperation extends Operation
    ? SwaggerOperation['parameters']['path'] extends infer SwaggerParameters
      ? GetUserPath<SwaggerPath, SwaggerParameters>
      : SwaggerPath
    : SwaggerPath;
