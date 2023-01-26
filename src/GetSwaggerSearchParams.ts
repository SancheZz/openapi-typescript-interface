type Operation = {
  operation: {
    parameters: {
      query: Record<string, string | number>;
    };
  };
};

type CheckParams<Params> = Params extends Partial<Params>
  ? { params?: Params }
  : { params: Params };

export type GetSwaggerSearchParams<FoundPath> = FoundPath extends Operation
  ? CheckParams<FoundPath['operation']['parameters']['query']>
  : Record<never, never>;
