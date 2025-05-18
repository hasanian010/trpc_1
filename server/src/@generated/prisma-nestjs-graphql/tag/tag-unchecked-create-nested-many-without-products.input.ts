import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProductsInput } from './tag-create-without-products.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProductsInput } from './tag-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutProductsInput {

    @Field(() => [TagCreateWithoutProductsInput], {nullable:true})
    @Type(() => TagCreateWithoutProductsInput)
    create?: Array<TagCreateWithoutProductsInput>;

    @Field(() => [TagCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProductsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}
