import StoreNotExistException from '../../Product/application/exeption/StoreNotExistException';
import Store from '../domain/models/Store';
import StoreRepositoryPort from './StoreRepository';

export default class StoreService {
  private readonly storeRepository: StoreRepositoryPort;

  constructor(storeRepository: StoreRepositoryPort) {
    this.storeRepository = storeRepository;
  }

  async getStoreById(storeId: number): Promise<Store> {
    try {
      return await this.storeRepository.getStoreById(storeId);
    } catch (e) {
      throw new StoreNotExistException();
    }
  }
}
