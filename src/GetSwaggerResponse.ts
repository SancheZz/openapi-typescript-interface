type OperationContent = {
  content: unknown;
};

export type Operation = {
  operation: {
    responses: Record<number | 'default', unknown>;
  };
};

type GetContent<T> = T extends OperationContent
  ? T['content'] extends infer Content
    ? Content[keyof Content]
    : never
  : never;

type GetUnknown<ResponseContent> = [never] extends [ResponseContent]
  ? unknown
  : ResponseContent

type IsOk<Status> = Status extends 200 | 201 | 202 | 203 | 204 | 205 | 206 ? true : false

type GetResponse<Responses> = {
  [Key in keyof Responses as Key extends 'default'
    ? never
    : Key]: {
    status: Key;
    body: GetUnknown<GetContent<Responses[Key]>>
    ok: IsOk<Key>
  };
};

export type GetSwaggerResponse<FoundPath> = FoundPath extends Operation
  ? GetResponse<FoundPath['operation']['responses']> extends infer Value
    ? Value[keyof Value]
    : never
  : void;