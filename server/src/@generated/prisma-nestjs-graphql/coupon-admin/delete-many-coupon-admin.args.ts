import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCouponAdminArgs {

    @Field(() => CouponAdminWhereInput, {nullable:true})
    @Type(() => CouponAdminWhereInput)
    where?: CouponAdminWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
