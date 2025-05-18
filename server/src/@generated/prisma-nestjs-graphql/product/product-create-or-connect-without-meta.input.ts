import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutMetaInput } from './product-create-without-meta.input';

@InputType()
export class ProductCreateOrConnectWithoutMetaInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutMetaInput, {nullable:false})
    @Type(() => ProductCreateWithoutMetaInput)
    create!: ProductCreateWithoutMetaInput;
}
