import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminCreateManyInput } from './coupon-admin-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCouponAdminArgs {

    @Field(() => [CouponAdminCreateManyInput], {nullable:false})
    @Type(() => CouponAdminCreateManyInput)
    data!: Array<CouponAdminCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
