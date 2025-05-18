import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantUpdateInput } from './product-attribute-variant-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';

@ArgsType()
export class UpdateOneProductAttributeVariantArgs {

    @Field(() => ProductAttributeVariantUpdateInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateInput)
    data!: ProductAttributeVariantUpdateInput;

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;
}
