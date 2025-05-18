import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProductsInput } from './tag-create-without-products.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProductsInput } from './tag-create-or-connect-without-products.input';
import { TagUpsertWithWhereUniqueWithoutProductsInput } from './tag-upsert-with-where-unique-without-products.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutProductsInput } from './tag-update-with-where-unique-without-products.input';
import { TagUpdateManyWithWhereWithoutProductsInput } from './tag-update-many-with-where-without-products.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutProductsNestedInput {

    @Field(() => [TagCreateWithoutProductsInput], {nullable:true})
    @Type(() => TagCreateWithoutProductsInput)
    create?: Array<TagCreateWithoutProductsInput>;

    @Field(() => [TagCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProductsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
