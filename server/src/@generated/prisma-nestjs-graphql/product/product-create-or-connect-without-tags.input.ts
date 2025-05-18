import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutTagsInput } from './product-create-without-tags.input';

@InputType()
export class ProductCreateOrConnectWithoutTagsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutTagsInput, {nullable:false})
    @Type(() => ProductCreateWithoutTagsInput)
    create!: ProductCreateWithoutTagsInput;
}
