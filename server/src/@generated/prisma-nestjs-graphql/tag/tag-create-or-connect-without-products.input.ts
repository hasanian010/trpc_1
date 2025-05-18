import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutProductsInput } from './tag-create-without-products.input';

@InputType()
export class TagCreateOrConnectWithoutProductsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagCreateWithoutProductsInput, {nullable:false})
    @Type(() => TagCreateWithoutProductsInput)
    create!: TagCreateWithoutProductsInput;
}
