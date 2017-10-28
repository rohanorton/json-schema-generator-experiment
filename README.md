# A JSON-Schema Generator

Just a spike of a JSON-Schema generator I was thinking about making. The
underlying code is pretty awful, was more interested in the API.

```js
schema('User', [
        field('firstName', [string]),
        field('lastName', [string]),
        field('age', [int, optional]),

        timestamps()
]);

/* Generates...

    {
        title: 'User',
        type: 'object',
        properties: {
            firstName: {
                type: 'string',
            },
            lastName: {
                type: 'string',
            },
            age: {
                type: 'integer',
            },
            createdAt: {
                type: 'date-time'
            },
            updatedAt: {
                type: 'date-time'
            }
        },
        required: ['firstName', 'lastName', 'createdAt', 'updatedAt'],
    };
*/
```
