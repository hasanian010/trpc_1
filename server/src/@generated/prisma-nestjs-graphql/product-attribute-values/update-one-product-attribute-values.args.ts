import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesUpdateInput } from './product-attribute-values-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';

@ArgsType()
export class UpdateOneProductAttributeValuesArgs {

    @Field(() => ProductAttributeValuesUpdateInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateInput)
    data!: ProductAttributeValuesUpdateInput;

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;
}
