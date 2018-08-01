import { get } from 'axios';

describe('API Connection Test', () => {
  jest.setTimeout(30000);
  it('returns info stored in the database', (done) => {
    get(`http://localhost:3002/deal/9/description`)
      .then((response) => {
        let description = response.data[0];
        expect(description.zip).toEqual('86367');
        done();
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
