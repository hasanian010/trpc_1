import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductAttributeInput } from './product-create-without-product-attribute.input';

@InputType()
export class ProductCreateOrConnectWithoutProductAttributeInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductAttributeInput)
    create!: ProductCreateWithoutProductAttributeInput;
}
