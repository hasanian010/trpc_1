import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async mainCategories() {
    return await this.prisma.mainCategory.findMany({
      include: { categories: true },
    });
  }

  async mainCategory(id: string) {
    const mainCategory = await this.prisma.mainCategory.findUnique({
      where: { id },
      include: { categories: true },
    });
    if (!mainCategory) {
      throw new NotFoundException('Main category not found');
    }
    return mainCategory;
  }

  async addMain(data: any) {
    return await this.prisma.mainCategory.create({ data });
  }

  async updateMain(id: string, data: any) {
    const mainCategory = await this.prisma.mainCategory.findUnique({ where: { id } });
    if (!mainCategory) {
      throw new NotFoundException('Main category not found');
    }
    return await this.prisma.mainCategory.update({ where: { id }, data });
  }

  async deleteMain(id: string) {
    const mainCategory = await this.prisma.mainCategory.findUnique({ where: { id } });
    if (!mainCategory) {
      throw new NotFoundException('Main category not found');
    }
    return await this.prisma.mainCategory.delete({ where: { id } });
  }

  async categories() {
    return await this.prisma.category.findMany({
      include: { subCategories: true },
    });
  }

  async category(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { subCategories: true },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async addCategory(data: any) {
    return await this.prisma.category.create({ data });
  }

  async updateCategory(id: string, data: any) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return await this.prisma.category.update({ where: { id }, data });
  }

  async deleteCategory(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return await this.prisma.category.delete({ where: { id } });
  }

  async getSubs(categoryId: string) {
    return await this.prisma.subCategory.findMany({
      where: { categoryId },
    });
  }

  async getSub(id: string) {
    const subCategory = await this.prisma.subCategory.findUnique({ where: { id } });
    if (!subCategory) {
      throw new NotFoundException('Sub category not found');
    }
    return subCategory;
  }

  async createSub(data: any) {
    return await this.prisma.subCategory.create({ data });
  }

  async updateSub(id: string, data: any) {
    const subCategory = await this.prisma.subCategory.findUnique({ where: { id } });
    if (!subCategory) {
      throw new NotFoundException('Sub category not found');
    }
    return await this.prisma.subCategory.update({ where: { id }, data });
  }

  async deleteSub(id: string) {
    const subCategory = await this.prisma.subCategory.findUnique({ where: { id } });
    if (!subCategory) {
      throw new NotFoundException('Sub category not found');
    }
    return await this.prisma.subCategory.delete({ where: { id } });
  }
}
