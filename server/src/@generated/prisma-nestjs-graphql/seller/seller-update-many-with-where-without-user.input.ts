import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerScalarWhereInput } from './seller-scalar-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateManyMutationInput } from './seller-update-many-mutation.input';

@InputType()
export class SellerUpdateManyWithWhereWithoutUserInput {

    @Field(() => SellerScalarWhereInput, {nullable:false})
    @Type(() => SellerScalarWhereInput)
    where!: SellerScalarWhereInput;

    @Field(() => SellerUpdateManyMutationInput, {nullable:false})
    @Type(() => SellerUpdateManyMutationInput)
    data!: SellerUpdateManyMutationInput;
}
