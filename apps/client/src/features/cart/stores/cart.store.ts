import { makeAutoObservable } from 'mobx';
import { CartApi, CartItemResponseDto, AddToCartDto } from '@poizon/api';
import { api } from '@/shared/api';

class CartStore {
  items: CartItemResponseDto[] = [];
  isLoading = false;
  error: string | null = null;

  private cartApi: CartApi;

  constructor() {
    makeAutoObservable(this);
    this.cartApi = new CartApi(api.config);
  }

  async fetchCart() {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await this.cartApi.findAll();
      this.items = response.data;
    } catch (error) {
      this.error = 'Не удалось загрузить корзину';
      console.error('Error fetching cart:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async addToCart(productVariantId: string, size: string, quantity: number) {
    this.isLoading = true;
    this.error = null;
    try {
      const addToCartDto: AddToCartDto = {
        productVariantId,
        size,
        quantity
      };
      await this.cartApi.addToCart(addToCartDto);
      await this.fetchCart();
    } catch (error) {
      this.error = 'Не удалось добавить товар в корзину';
      console.error('Error adding to cart:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async removeFromCart(id: string) {
    this.isLoading = true;
    this.error = null;
    try {
      await this.cartApi.remove(id);
      await this.fetchCart();
    } catch (error) {
      this.error = 'Не удалось удалить товар из корзины';
      console.error('Error removing from cart:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async updateQuantity(id: string) {
    this.isLoading = true;
    this.error = null;
    try {
      await this.cartApi.updateQuantity(id);
      await this.fetchCart();
    } catch (error) {
      this.error = 'Не удалось обновить количество товара';
      console.error('Error updating quantity:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async clearCart() {
    this.isLoading = true;
    this.error = null;
    try {
      await this.cartApi.clearCart();
      this.items = [];
    } catch (error) {
      this.error = 'Не удалось очистить корзину';
      console.error('Error clearing cart:', error);
    } finally {
      this.isLoading = false;
    }
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);
  }
}

export const cartStore = new CartStore(); 