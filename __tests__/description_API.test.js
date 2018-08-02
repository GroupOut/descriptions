import { get } from 'axios';

describe('API-Connection-Test', () => {
  it('returns info stored in the database', (done) => {
    get(`http://localhost:3002/deal/2/description`)
      .then((response) => {
        let description = response.data[0];
        expect(description.zip).toEqual('72912');
        done();
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
