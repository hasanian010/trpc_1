import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderNullableScalarRelationFilter {

    @Field(() => OrderWhereInput, {nullable:true})
    is?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    isNot?: OrderWhereInput;
}
