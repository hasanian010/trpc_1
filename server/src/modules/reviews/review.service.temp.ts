import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async getReviews() {
    return await this.prisma.review.findMany({
      where: { publish: true },
      include: { user: true, seller: true, product: true },
    });
  }

  async getReviewsByAdmin() {
    return await this.prisma.review.findMany({
      include: { user: true, seller: true, product: true },
    });
  }

  async getReviewBySeller(sellerId: string) {
    return await this.prisma.review.findMany({
      where: { sellerId },
      include: { user: true, product: true },
    });
  }

  async add(data: any) {
    return await this.prisma.review.create({ data });
  }

  async reply(id: string, replyText: string) {
    const review = await this.prisma.review.findUnique({ where: { id } });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return await this.prisma.review.update({
      where: { id },
      data: { reply: replyText },
    });
  }

  async check(id: string) {
    const review = await this.prisma.review.findUnique({ where: { id } });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    // منطق بررسی (مثلاً تایید یا رد)
    return review;
  }

  async visibility(id: string, visible: boolean) {
    const review = await this.prisma.review.findUnique({ where: { id } });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return await this.prisma.review.update({
      where: { id },
      data: { publish: visible },
    });
  }
}
