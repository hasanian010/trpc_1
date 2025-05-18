import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BankCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    accNumber!: string;

    @Field(() => String, {nullable:false})
    routing!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    branch!: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
