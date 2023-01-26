# @yasanchezz/openapi-typescript-interface

If you wanna use [`openapi-typescript`](https://www.npmjs.com/package/openapi-typescript) with union entry point such as union request function, you can install this package and get swagger types for your own data fetching function.

```ts
import type { GetSwaggerInterface } from '@yasanchezz/openapi-typescript-interface';
import type { paths } from '../swagger'; // or where do you place swagger types?

const request: GetSwaggerInterface<paths> = async (options): Promise<any> => {
  const response = await fetch(options);
  const body = await response.json();

  return {
    status: response.status,
    body,
    ok: response.ok,
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
