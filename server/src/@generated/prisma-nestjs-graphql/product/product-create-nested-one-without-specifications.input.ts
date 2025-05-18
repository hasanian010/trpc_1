import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSpecificationsInput } from './product-create-without-specifications.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSpecificationsInput } from './product-create-or-connect-without-specifications.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutSpecificationsInput {

    @Field(() => ProductCreateWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductCreateWithoutSpecificationsInput)
    create?: ProductCreateWithoutSpecificationsInput;

    @Field(() => ProductCreateOrConnectWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSpecificationsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutSpecificationsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
