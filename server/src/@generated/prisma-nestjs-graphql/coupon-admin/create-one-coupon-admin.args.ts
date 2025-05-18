import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponAdminCreateInput } from './coupon-admin-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCouponAdminArgs {

    @Field(() => CouponAdminCreateInput, {nullable:false})
    @Type(() => CouponAdminCreateInput)
    data!: CouponAdminCreateInput;
}
