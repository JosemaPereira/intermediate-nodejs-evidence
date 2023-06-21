import { BlogServices } from './blog.services.js';
import { Blog } from '../models/index.js';
import { testingDB } from '../database/index.js';

beforeAll(async () => await testingDB.create());
beforeAll(async () => await testingDB.connect());
afterEach(async () => await testingDB.clear());
afterAll(async () => await testingDB.close());

describe('blog services', () => {
  const defaultResponse = {
    title: 'foo',
    author: 'bar',
  };

  const defaultRequestByID = { params: { id: '123' } };

  it('get blog entries fail', async () => {
    jest.spyOn(Blog.model, 'find').mockReturnValue(Error('common error'));
    await expect(BlogServices.get()).rejects.toThrow();
  });

  it('get blog entries', async () => {
    jest.spyOn(Blog.model, 'find').mockReturnValue([defaultResponse]);
    await expect(BlogServices.get()).not.toBeNull();
  });

  it('get blog entry by id', async () => {
    jest.spyOn(Blog.model, 'findById').mockReturnValue(defaultResponse);
    await expect(BlogServices.getByID(defaultRequestByID)).not.toBeNull();
  });
  it('get blog entry by id fail', async () => {
    jest.spyOn(Blog.model, 'findById').mockReturnValue(undefined);
    await expect(BlogServices.getByID(defaultRequestByID)).rejects.toThrow();
  });

  it('create new entry', async () => {
    const mockModel = new Blog.model();
    jest.spyOn(mockModel, 'save').mockReturnValue(defaultResponse);
    await expect(BlogServices.post({ body: defaultResponse })).not.toBeNul;
  });

  it('create new entry fail', async () => {
    const mockModel = new Blog.model();
    jest.spyOn(mockModel, 'save').mockReturnValue(Error('common error'));
    await expect(BlogServices.post({ body: {} })).rejects.toThrow();
  });

  it('update blog entry', async () => {
    jest.spyOn(Blog.model, 'findOneAndUpdate').mockReturnValue(defaultResponse);
    await expect(
      BlogServices.put({ body: defaultResponse, ...defaultRequestByID }),
    ).not.toBeNull();
  });

  it('update blog entry by id fail', async () => {
    jest.spyOn(Blog.model, 'findOneAndUpdate').mockReturnValue(undefined);
    await expect(
      BlogServices.put({ body: defaultResponse, ...defaultRequestByID }),
    ).rejects.toThrow();
  });

  it('delete blog entry', async () => {
    jest.spyOn(Blog.model, 'deleteOne').mockReturnValue({ deletedCount: 1 });
    await expect(
      BlogServices.drop({ body: defaultResponse, ...defaultRequestByID }),
    ).not.toBeNull();
  });

  it('delete blog entry fail', async () => {
    jest.spyOn(Blog.model, 'deleteOne').mockReturnValue(undefined);
    await expect(
      BlogServices.drop({ body: defaultResponse, ...defaultRequestByID }),
    ).rejects.toThrow();
  });
});
