import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';

@InputType()
export class FlashNullableScalarRelationFilter {

    @Field(() => FlashWhereInput, {nullable:true})
    is?: FlashWhereInput;

    @Field(() => FlashWhereInput, {nullable:true})
    isNot?: FlashWhereInput;
}
