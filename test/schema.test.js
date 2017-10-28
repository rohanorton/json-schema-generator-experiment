const assert = require('assert');

const {schema, field, string, int, optional, timestamps} = require('../');

describe('schema()', () => {
    it('should generate an empty json-schema definition', () => {
        const actual = schema('User', []);
        const expected = {
            title: 'User',
            type: 'object',
            properties: {},
            required: [],
        };
        assert.deepEqual(actual, expected);
    });

    it('should generate a json-schema definition with fields', () => {
        const actual =
            schema('User', [
                field('firstName', [string]),
                field('lastName', [string]),
                field('age', [int, optional]),

                timestamps()
            ]);

        const expected =
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

        assert.deepEqual(actual, expected);
    });
});
