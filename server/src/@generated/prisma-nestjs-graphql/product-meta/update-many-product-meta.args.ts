import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaUpdateManyMutationInput } from './product-meta-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductMetaArgs {

    @Field(() => ProductMetaUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductMetaUpdateManyMutationInput)
    data!: ProductMetaUpdateManyMutationInput;

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    where?: ProductMetaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
