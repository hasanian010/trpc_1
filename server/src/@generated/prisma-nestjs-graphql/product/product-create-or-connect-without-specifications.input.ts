import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSpecificationsInput } from './product-create-without-specifications.input';

@InputType()
export class ProductCreateOrConnectWithoutSpecificationsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutSpecificationsInput, {nullable:false})
    @Type(() => ProductCreateWithoutSpecificationsInput)
    create!: ProductCreateWithoutSpecificationsInput;
}
