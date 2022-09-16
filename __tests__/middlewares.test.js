`use strict`;

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('run server ', () => {
    it('test server run', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('test');
    })
});

describe('test middlewares', () => {
    it('test square', async () => {
        const res = await request.get('/square?num=5');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"num":25}');
    });

    it('not number error', async () => {
        const res = await request.get('/square?num="test"');
        expect(res.status).toEqual(500);
        expect(res.text).toEqual('{"code":500,"message":"Server Error : the \\\"test\\\" is not number"}');
    })
})