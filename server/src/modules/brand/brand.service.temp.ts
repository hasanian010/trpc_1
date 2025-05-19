import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  async getBrands() {
    return await this.prisma.brand.findMany();
  }

  async getBrand(id: string) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return brand;
  }

  async add(data: any) {
    return await this.prisma.brand.create({ data });
  }

  async update(id: string, data: any) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return await this.prisma.brand.update({ where: { id }, data });
  }

  async delete(id: string) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return await this.prisma.brand.delete({ where: { id } });
  }
}
