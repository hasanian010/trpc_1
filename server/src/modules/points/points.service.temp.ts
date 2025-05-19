import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PointsService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.points.findMany();
  }

  async getPoints(userId: string) {
    const points = await this.prisma.points.findMany({
      where: { userId },
    });
    if (!points) {
      throw new NotFoundException('Points not found for user');
    }
    return points;
  }
}
