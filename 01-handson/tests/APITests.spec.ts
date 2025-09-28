import { test, expect } from '@playwright/test';
let userId;

test('Get User', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Accept': 'application/json'
    }
  });

  console.log(await response.json())
  expect(response.status()).toBe(200)
})

test("Create User", async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users',
    {
      data: {
        "name": "jgyun",
        "job": "architect",
      },
      headers: {
        'x-api-key': 'reqres-free-v1',
        "Accept" : "application/json"
      }
    });
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userId = res.id
})
