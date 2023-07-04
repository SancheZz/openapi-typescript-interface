# @yasanchezz/openapi-typescript-interface

If you wanna use [`openapi-typescript`](https://www.npmjs.com/package/openapi-typescript) with union entry point such as union request function, you can install this package and get swagger types for your own data fetching function.

```ts
import type { GetSwaggerInterface } from '@yasanchezz/openapi-typescript-interface';
import type { paths } from '../swagger'; // or where do you place swagger types?

// user input values
type UserInput = {
  sginal?: AbortSignal | null;
};

// user output values
type UserOutput = {
  something: string;
}

const request: GetSwaggerInterface<paths, UserInput, UserOutput> = async (options): Promise<any> => {
  const response = await fetch(options.path, {
     body: 'body' in options && 'headers' in options
      ? JSON.stringify(options.body) // for example
      : null,
    cache: 'no-cache',
    headers: new Headers(options.headers),
    method: options.method.toUpperCase(),
    mode: 'cors',
    signal: options.signal || null,
  });

  const body = await response.json();

  return {
    status: response.status, // library required field
    body, // library required field
    ok: response.ok, // library required field
    something: 'something', // UserOutput.something
  };
};

// all passed and response values will be inference from swagger types
const response = await request({
  headers: { 'Content-Type': 'application/json' },
  method: 'delete',
  path: `/api/v1/document/${id}`,
});

// success
if (response.ok) {
  response.body;
}
```
