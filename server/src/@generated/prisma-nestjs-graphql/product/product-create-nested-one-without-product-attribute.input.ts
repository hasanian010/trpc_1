import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductAttributeInput } from './product-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductAttributeInput } from './product-create-or-connect-without-product-attribute.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutProductAttributeInput {

    @Field(() => ProductCreateWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductAttributeInput)
    create?: ProductCreateWithoutProductAttributeInput;

    @Field(() => ProductCreateOrConnectWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductAttributeInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
