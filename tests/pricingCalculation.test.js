const request = require('supertest');
const app = require('../app');

describe('/api/pricing calculation correctness', () => {
  test.each([
    { zone: "central", distance: 20.1, organization_id: "7", item_type: "perishable", expectedPrice: 47.2 },
    { zone: "suburban", distance: 30.5, organization_id: "7", item_type: "non-perishable", expectedPrice: 65.5 },
    { zone: "suburban", distance: 15, organization_id: "3", item_type: "non-perishable", expectedPrice: 16.0 },
    { zone: "rural", distance: 10, organization_id: "10", item_type: "non-perishable", expectedPrice: 28.0 },
    { zone: "suburban", distance: 9, organization_id: "6", item_type: "perishable", expectedPrice: 24.0 },
  ])('calculates the correct price for $item_type items in $zone zone over $distance km', async ({ zone, distance, organization_id, item_type, expectedPrice }) => {
    const postData = { zone, organization_id, total_distance: distance, item_type };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total_price: expectedPrice });
  });
});
