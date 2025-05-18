import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserUpdateManyMutationInput } from './coupon-user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CouponUserWhereInput } from './coupon-user-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCouponUserArgs {

    @Field(() => CouponUserUpdateManyMutationInput, {nullable:false})
    @Type(() => CouponUserUpdateManyMutationInput)
    data!: CouponUserUpdateManyMutationInput;

    @Field(() => CouponUserWhereInput, {nullable:true})
    @Type(() => CouponUserWhereInput)
    where?: CouponUserWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
