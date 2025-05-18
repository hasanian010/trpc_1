import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeUpdateManyMutationInput } from './product-attribute-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductAttributeArgs {

    @Field(() => ProductAttributeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeUpdateManyMutationInput)
    data!: ProductAttributeUpdateManyMutationInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
