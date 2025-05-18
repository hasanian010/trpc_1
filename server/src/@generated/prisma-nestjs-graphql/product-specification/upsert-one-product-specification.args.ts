import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Type } from 'class-transformer';
import { ProductSpecificationCreateInput } from './product-specification-create.input';
import { ProductSpecificationUpdateInput } from './product-specification-update.input';

@ArgsType()
export class UpsertOneProductSpecificationArgs {

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:false})
    @Type(() => ProductSpecificationWhereUniqueInput)
    where!: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;

    @Field(() => ProductSpecificationCreateInput, {nullable:false})
    @Type(() => ProductSpecificationCreateInput)
    create!: ProductSpecificationCreateInput;

    @Field(() => ProductSpecificationUpdateInput, {nullable:false})
    @Type(() => ProductSpecificationUpdateInput)
    update!: ProductSpecificationUpdateInput;
}
