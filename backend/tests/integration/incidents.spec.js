const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('incidents', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('it should to create a new incident', async () => {
    const ong_id = request(app).get('profile');
    const response = request(app)
    .post('incidents')
    .set(authorization, '')
    .send({
      title: "Novo caso",
      description: "Chinchila com a pata machucada.",
      value: 350
    })
  });
});