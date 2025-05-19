import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}

  async get(userId: string) {
    return await this.prisma.wishlist.findMany({
      where: { userId },
      include: { product: true },
    });
  }

  async check(userId: string, productId: string) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
    return !!wishlist;
  }

  async add(userId: string, productId: string) {
    return await this.prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
    });
  }

  async delete(userId: string, productId: string) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
    if (!wishlist) {
      throw new NotFoundException('Wishlist item not found');
    }
    return await this.prisma.wishlist.delete({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
  }
}
