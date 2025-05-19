import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PlatformService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.platform.findMany();
  }

  async add(data: any) {
    return await this.prisma.platform.create({ data });
  }
}
