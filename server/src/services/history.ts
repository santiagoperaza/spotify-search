import { AppDataSource } from '../db/data-source.js'
import { SearchRecord } from '../db/entities/SearchRecord.js'

export const saveSearch = async (data: string) => {
    console.log('Inserting a new request into the database...');
    const request = new SearchRecord();
    request.query = data;
    request.date = new Date();
    await AppDataSource.manager.save(request);
    console.log(`Saved a new request with id: ${request.id}`);
}

export const getAll = (): Promise<SearchRecord[]> => {
  return AppDataSource.manager.find(SearchRecord);
}