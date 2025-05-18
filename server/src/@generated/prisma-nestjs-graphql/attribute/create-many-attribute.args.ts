import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeCreateManyInput } from './attribute-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAttributeArgs {

    @Field(() => [AttributeCreateManyInput], {nullable:false})
    @Type(() => AttributeCreateManyInput)
    data!: Array<AttributeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
