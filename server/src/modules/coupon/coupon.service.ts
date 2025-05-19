import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CouponService {
  constructor(private readonly prisma: PrismaService) {}

  async getByUser() {
    return await this.prisma.couponUser.findMany();
  }

  async getByAdmin() {
    return await this.prisma.couponAdmin.findMany();
  }

  async getSingleByAdmin(id: string) {
    const coupon = await this.prisma.couponAdmin.findUnique({ where: { id } });
    if (!coupon) {
      throw new NotFoundException('Coupon not found');
    }
    return coupon;
  }

  async add(data: any) {
    return await this.prisma.couponAdmin.create({ data });
  }

  async redeem(code: string) {
    const coupon = await this.prisma.couponAdmin.findFirst({ where: { code } });
    if (!coupon) {
      throw new NotFoundException('Coupon code not found');
    }
    return coupon;
  }

  async update(id: string, data: any) {
    const coupon = await this.prisma.couponAdmin.findUnique({ where: { id } });
    if (!coupon) {
      throw new NotFoundException('Coupon not found');
    }
    return await this.prisma.couponAdmin.update({ where: { id }, data });
  }

  async apply(code: string) {
    const coupon = await this.prisma.couponAdmin.findFirst({ where: { code } });
    if (!coupon) {
      throw new NotFoundException('Coupon not available');
    }
    return coupon;
  }

  async delete(id: string) {
    const coupon = await this.prisma.couponAdmin.findUnique({ where: { id } });
    if (!coupon) {
      throw new NotFoundException('Coupon not found');
    }
    return await this.prisma.couponAdmin.delete({ where: { id } });
  }
}
