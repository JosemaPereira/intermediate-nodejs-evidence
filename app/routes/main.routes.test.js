import express from 'express';
import request from 'supertest';
import { MainRoute } from './main.routes.js';

const app = express();
MainRoute(app);

describe('Main routes', () => {
  it('get / success', async () => {
    const res = await request(app).get('/?foo=bar');
    expect(res.statusCode).toBe(200);
  });
  it('get / fail', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(500);
  });
});
