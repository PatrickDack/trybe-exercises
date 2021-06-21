const fetchDog = require('../souce/fetchDogPictures');

describe('testa função fetchApi', () => {
  const apiURL = jest.spyOn(fetchDog, 'fetchApi');
  afterEach(apiURL.mockReset);
  it('testa caso de sucesso na requição', () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  it('testa caso de sucesso na requisição')
});