import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async get(userId: string) {
    return await this.prisma.address.findMany({
      where: { userId },
    });
  }

  async add(data: any) {
    return await this.prisma.address.create({
      data,
    });
  }

  async update(id: string, data: any) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException('Address not found');
    }
    return await this.prisma.address.update({
      where: { id },
      data,
    });
  }

  async mark(id: string, userId: string) {
    // متد mark حذف یا اصلاح شده چون فیلد isDefault در مدل وجود ندارد
    // اگر نیاز به نشانه گذاری آدرس پیش فرض است، باید فیلد جدیدی در مدل اضافه شود
    // در حال حاضر این متد فقط آدرس مشخص شده را برمی‌گرداند
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException('Address not found');
    }
    return address;
  }

  async delete(id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) {
      throw new NotFoundException('Address not found');
    }
    return await this.prisma.address.delete({ where: { id } });
  }
}
