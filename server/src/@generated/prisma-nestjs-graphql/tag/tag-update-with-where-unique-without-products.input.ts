import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutProductsInput } from './tag-update-without-products.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagUpdateWithoutProductsInput, {nullable:false})
    @Type(() => TagUpdateWithoutProductsInput)
    data!: TagUpdateWithoutProductsInput;
}
