import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserWhereInput } from './coupon-user-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCouponUserArgs {

    @Field(() => CouponUserWhereInput, {nullable:true})
    @Type(() => CouponUserWhereInput)
    where?: CouponUserWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
