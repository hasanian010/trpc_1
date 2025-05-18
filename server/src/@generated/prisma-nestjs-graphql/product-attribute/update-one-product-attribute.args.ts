import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeUpdateInput } from './product-attribute-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';

@ArgsType()
export class UpdateOneProductAttributeArgs {

    @Field(() => ProductAttributeUpdateInput, {nullable:false})
    @Type(() => ProductAttributeUpdateInput)
    data!: ProductAttributeUpdateInput;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;
}
