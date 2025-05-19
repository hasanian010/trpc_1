import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class SellerService {
  constructor(private readonly prisma: PrismaService) {}

  async gets() {
    return await this.prisma.seller.findMany();
  }

  async getsByAdmin() {
    // منطق مشابه gets با فیلترهای مدیریتی
    return await this.prisma.seller.findMany();
  }

  async get(id: string) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    return seller;
  }

  async getByAdmin(id: string) {
    // منطق مشابه get با دسترسی مدیریتی
    return this.get(id);
  }

  async getProfile(userId: string) {
    const seller = await this.prisma.seller.findUnique({ where: { userId } });
    if (!seller) {
      throw new NotFoundException('Seller profile not found');
    }
    return seller;
  }

  async create(data: any) {
    return await this.prisma.seller.create({ data });
  }

  async verifyPhone(id: string, phone: string) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    return await this.prisma.seller.update({
      where: { id },
      data: { phone, isVerified: true },
    });
  }

  async update(id: string, data: any) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    return await this.prisma.seller.update({ where: { id }, data });
  }

  async ban(id: string) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    return await this.prisma.seller.update({
      where: { id },
      data: { isBanned: true },
    });
  }

  async verify(id: string) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    return await this.prisma.seller.update({
      where: { id },
      data: { isVerified: true },
    });
  }

  async bank(id: string, bankData: any) {
    const seller = await this.prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    // اگر بانک وجود دارد آپدیت کن، در غیر این صورت ایجاد کن
    const existingBank = await this.prisma.bank.findUnique({ where: { sellerId: id } });
    if (existingBank) {
      return await this.prisma.bank.update({
        where: { sellerId: id },
        data: bankData,
      });
    } else {
      return await this.prisma.bank.create({
        data: { ...bankData, sellerId: id },
      });
    }
  }
}
