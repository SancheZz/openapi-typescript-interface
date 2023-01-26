type Operation = {
  operation: {
    requestBody: {
      content: Record<string, unknown>;
    };
  };
};

export type GetSwaggerRequestBody<FoundPath> = FoundPath extends Operation
  ? FoundPath['operation']['requestBody']['content'] extends infer Content
    ? { body: Content[keyof Content] }
    : never
  : Record<never, never>;
