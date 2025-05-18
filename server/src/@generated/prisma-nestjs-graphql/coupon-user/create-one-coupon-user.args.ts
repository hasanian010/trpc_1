import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserCreateInput } from './coupon-user-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCouponUserArgs {

    @Field(() => CouponUserCreateInput, {nullable:false})
    @Type(() => CouponUserCreateInput)
    data!: CouponUserCreateInput;
}
