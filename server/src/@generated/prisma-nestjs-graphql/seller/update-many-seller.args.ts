import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerUpdateManyMutationInput } from './seller-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SellerWhereInput } from './seller-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySellerArgs {

    @Field(() => SellerUpdateManyMutationInput, {nullable:false})
    @Type(() => SellerUpdateManyMutationInput)
    data!: SellerUpdateManyMutationInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
