import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    // دریافت همه آیتم‌های سبد خرید (بدون فیلتر userId)
    return await this.prisma.orderProduct.findMany({
      include: { product: true, variations: true },
    });
  }

  async add(data: any) {
    return await this.prisma.orderProduct.create({
      data,
    });
  }

  async increase(id: string) {
    const item = await this.prisma.orderProduct.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException('Cart item not found');
    }
    return await this.prisma.orderProduct.update({
      where: { id },
      data: { quantity: item.quantity + 1 },
    });
  }

  async decrease(id: string) {
    const item = await this.prisma.orderProduct.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException('Cart item not found');
    }
    if (item.quantity <= 1) {
      return this.delete(id);
    }
    return await this.prisma.orderProduct.update({
      where: { id },
      data: { quantity: item.quantity - 1 },
    });
  }

  async delete(id: string) {
    const item = await this.prisma.orderProduct.findUnique({ where: { id } });
    if (!item) {
      throw new NotFoundException('Cart item not found');
    }
    return await this.prisma.orderProduct.delete({ where: { id } });
  }
}
