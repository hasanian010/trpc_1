import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationUpdateInput } from './product-specification-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';

@ArgsType()
export class UpdateOneProductSpecificationArgs {

    @Field(() => ProductSpecificationUpdateInput, {nullable:false})
    @Type(() => ProductSpecificationUpdateInput)
    data!: ProductSpecificationUpdateInput;

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:false})
    @Type(() => ProductSpecificationWhereUniqueInput)
    where!: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;
}
