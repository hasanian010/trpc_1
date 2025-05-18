import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerCreateInput } from './seller-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSellerArgs {

    @Field(() => SellerCreateInput, {nullable:false})
    @Type(() => SellerCreateInput)
    data!: SellerCreateInput;
}
