import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutTagsInput } from './product-update-without-tags.input';
import { ProductCreateWithoutTagsInput } from './product-create-without-tags.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutTagsInput)
    update!: ProductUpdateWithoutTagsInput;

    @Field(() => ProductCreateWithoutTagsInput, {nullable:false})
    @Type(() => ProductCreateWithoutTagsInput)
    create!: ProductCreateWithoutTagsInput;
}
