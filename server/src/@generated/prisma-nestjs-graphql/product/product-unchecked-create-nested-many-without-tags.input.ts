import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutTagsInput } from './product-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutTagsInput } from './product-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [ProductCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProductCreateWithoutTagsInput)
    create?: Array<ProductCreateWithoutTagsInput>;

    @Field(() => [ProductCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
