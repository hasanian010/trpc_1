import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerCreateManyInput } from './seller-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySellerArgs {

    @Field(() => [SellerCreateManyInput], {nullable:false})
    @Type(() => SellerCreateManyInput)
    data!: Array<SellerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
