import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUserCreateManyInput } from './coupon-user-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCouponUserArgs {

    @Field(() => [CouponUserCreateManyInput], {nullable:false})
    @Type(() => CouponUserCreateManyInput)
    data!: Array<CouponUserCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
