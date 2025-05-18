import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { Type } from 'class-transformer';
import { CouponAdminOrderByWithRelationInput } from './coupon-admin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CouponAdminWhereUniqueInput } from './coupon-admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponAdminScalarFieldEnum } from './coupon-admin-scalar-field.enum';

@ArgsType()
export class FindFirstCouponAdminOrThrowArgs {

    @Field(() => CouponAdminWhereInput, {nullable:true})
    @Type(() => CouponAdminWhereInput)
    where?: CouponAdminWhereInput;

    @Field(() => [CouponAdminOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CouponAdminOrderByWithRelationInput>;

    @Field(() => CouponAdminWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CouponAdminWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CouponAdminScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CouponAdminScalarFieldEnum}`>;
}
