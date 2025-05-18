import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminUpdateManyMutationInput } from './coupon-admin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CouponAdminWhereInput } from './coupon-admin-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCouponAdminArgs {

    @Field(() => CouponAdminUpdateManyMutationInput, {nullable:false})
    @Type(() => CouponAdminUpdateManyMutationInput)
    data!: CouponAdminUpdateManyMutationInput;

    @Field(() => CouponAdminWhereInput, {nullable:true})
    @Type(() => CouponAdminWhereInput)
    where?: CouponAdminWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
