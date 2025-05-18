import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutIncomesInput } from './seller-update-without-incomes.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutIncomesInput } from './seller-create-without-incomes.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutIncomesInput {

    @Field(() => SellerUpdateWithoutIncomesInput, {nullable:false})
    @Type(() => SellerUpdateWithoutIncomesInput)
    update!: SellerUpdateWithoutIncomesInput;

    @Field(() => SellerCreateWithoutIncomesInput, {nullable:false})
    @Type(() => SellerCreateWithoutIncomesInput)
    create!: SellerCreateWithoutIncomesInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
