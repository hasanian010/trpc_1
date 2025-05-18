import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantUpdateManyMutationInput } from './product-attribute-variant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductAttributeVariantArgs {

    @Field(() => ProductAttributeVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateManyMutationInput)
    data!: ProductAttributeVariantUpdateManyMutationInput;

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    @Type(() => ProductAttributeVariantWhereInput)
    where?: ProductAttributeVariantWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
