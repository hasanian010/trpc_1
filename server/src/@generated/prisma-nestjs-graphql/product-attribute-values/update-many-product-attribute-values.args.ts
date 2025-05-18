import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesUpdateManyMutationInput } from './product-attribute-values-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductAttributeValuesArgs {

    @Field(() => ProductAttributeValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateManyMutationInput)
    data!: ProductAttributeValuesUpdateManyMutationInput;

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    @Type(() => ProductAttributeValuesWhereInput)
    where?: ProductAttributeValuesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
