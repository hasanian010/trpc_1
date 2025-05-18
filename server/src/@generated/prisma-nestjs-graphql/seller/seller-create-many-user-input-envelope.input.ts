import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateManyUserInput } from './seller-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SellerCreateManyUserInputEnvelope {

    @Field(() => [SellerCreateManyUserInput], {nullable:false})
    @Type(() => SellerCreateManyUserInput)
    data!: Array<SellerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
