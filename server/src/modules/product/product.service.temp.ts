import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(private readonly prisma: PrismaService) {}

  async handleCron() {
    this.logger.log('Running product update cron job');
    // مثال: به‌روزرسانی وضعیت محصولات یا پاکسازی داده‌های قدیمی
    // اینجا می‌توانید منطق کرون را بر اساس نیاز پروژه اضافه کنید
    // برای نمونه، به‌روزرسانی totalPrice بر اساس price و quantity
    const products = await this.prisma.product.findMany();
    for (const product of products) {
      const totalPrice = parseFloat(product.price) * parseFloat(product.quantity);
      await this.prisma.product.update({
        where: { id: product.id },
        data: { totalPrice: totalPrice.toString() },
      });
    }
    this.logger.log('Product update cron job completed');
  }

  async getProducts() {
    return await this.prisma.product.findMany({
      include: {
        seller: true,
        mainCategory: true,
        category: true,
        brand: true,
        tags: true,
        reviews: true,
      },
    });
  }

  async getProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        seller: true,
        mainCategory: true,
        category: true,
        brand: true,
        tags: true,
        reviews: true,
      },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async getSelling() {
    return await this.prisma.product.findMany({
      where: { quantity: { gt: '0' }, visibility: true, isApproved: true },
    });
  }

  async getFlashProduct() {
    return await this.prisma.product.findMany({
      where: { flashId: { not: null }, visibility: true, isApproved: true },
    });
  }

  async getNoFlashProduct() {
    return await this.prisma.product.findMany({
      where: { flashId: null, visibility: true, isApproved: true },
    });
  }

  async getUnapproved() {
    return await this.prisma.product.findMany({
      where: { isApproved: false },
    });
  }

  async sellerProduct(sellerId: string) {
    return await this.prisma.product.findMany({
      where: { sellerId },
    });
  }

  async getOwnSellerProducts(userId: string) {
    const seller = await this.prisma.seller.findUnique({ where: { userId } });
    if (!seller) {
      throw new NotFoundException('Seller not found for user');
    }
    return await this.prisma.product.findMany({ where: { sellerId: seller.id } });
  }

  async getOwnSingle(productId: string, userId: string) {
    const seller = await this.prisma.seller.findUnique({ where: { userId } });
    if (!seller) {
      throw new NotFoundException('Seller not found for user');
    }
    const product = await this.prisma.product.findFirst({
      where: { id: productId, sellerId: seller.id },
    });
    if (!product) {
      throw new NotFoundException('Product not found for seller');
    }
    return product;
  }

  async add(data: any) {
    return await this.prisma.product.create({ data });
  }

  async update(id: string, data: any) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.update({ where: { id }, data });
  }

  async updateFlash(id: string, flashData: any) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.update({
      where: { id },
      data: { flashId: flashData.flashId },
    });
  }

  async change(id: string, changes: any) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.update({ where: { id }, data: changes });
  }

  async approved(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.update({
      where: { id },
      data: { isApproved: true },
    });
  }

  async delete(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.delete({ where: { id } });
  }
}
