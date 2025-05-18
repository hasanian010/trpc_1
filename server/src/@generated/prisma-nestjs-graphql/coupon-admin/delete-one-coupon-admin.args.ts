import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CouponAdminWhereUniqueInput } from './coupon-admin-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCouponAdminArgs {

    @Field(() => CouponAdminWhereUniqueInput, {nullable:false})
    @Type(() => CouponAdminWhereUniqueInput)
    where!: Prisma.AtLeast<CouponAdminWhereUniqueInput, 'id'>;
}
