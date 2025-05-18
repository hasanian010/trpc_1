import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductSpecificationArgs {

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:false})
    @Type(() => ProductSpecificationWhereUniqueInput)
    where!: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;
}
