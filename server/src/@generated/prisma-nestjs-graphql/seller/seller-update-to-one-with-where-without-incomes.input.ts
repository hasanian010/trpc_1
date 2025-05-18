import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutIncomesInput } from './seller-update-without-incomes.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutIncomesInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutIncomesInput, {nullable:false})
    @Type(() => SellerUpdateWithoutIncomesInput)
    data!: SellerUpdateWithoutIncomesInput;
}
