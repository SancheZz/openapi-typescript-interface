type Operation = {
  method: string;
  path: string;
  operation: {
    requestBody: {
      content: Record<string, unknown>;
    };
  };
};

type DefaultHeaders = {
  headers?: Record<string, string>;
};

export type GetSwaggerHeaders<FoundPath> = FoundPath extends Operation
  ? {
      headers: {
        'Content-Type': keyof FoundPath['operation']['requestBody']['content'];
      } & Record<string, string>;
    }
  : DefaultHeaders;
