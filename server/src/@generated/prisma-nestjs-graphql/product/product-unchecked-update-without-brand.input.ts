import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SubCategoryUncheckedUpdateManyWithoutProductsNestedInput } from '../sub-category/sub-category-unchecked-update-many-without-products-nested.input';
import { TagUncheckedUpdateManyWithoutProductsNestedInput } from '../tag/tag-unchecked-update-many-without-products-nested.input';
import { ProductAttributeValuesUncheckedUpdateManyWithoutProductNestedInput } from '../product-attribute-values/product-attribute-values-unchecked-update-many-without-product-nested.input';
import { ProductAttributeVariantUncheckedUpdateManyWithoutProductNestedInput } from '../product-attribute-variant/product-attribute-variant-unchecked-update-many-without-product-nested.input';
import { ProductAttributeUncheckedUpdateManyWithoutProductNestedInput } from '../product-attribute/product-attribute-unchecked-update-many-without-product-nested.input';
import { ProductSpecificationUncheckedUpdateManyWithoutProductNestedInput } from '../product-specification/product-specification-unchecked-update-many-without-product-nested.input';
import { ProductMetaUncheckedUpdateOneWithoutProductNestedInput } from '../product-meta/product-meta-unchecked-update-one-without-product-nested.input';
import { OrderProductUncheckedUpdateManyWithoutProductNestedInput } from '../order-product/order-product-unchecked-update-many-without-product-nested.input';
import { RefundableUncheckedUpdateManyWithoutProductNestedInput } from '../refundable/refundable-unchecked-update-many-without-product-nested.input';
import { WishlistUncheckedUpdateManyWithoutProductNestedInput } from '../wishlist/wishlist-unchecked-update-many-without-product-nested.input';
import { ReviewUncheckedUpdateManyWithoutProductNestedInput } from '../review/review-unchecked-update-many-without-product-nested.input';
import { SectionProductUncheckedUpdateManyWithoutProductNestedInput } from '../section-product/section-product-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutBrandInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sellerId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mainCategoryId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unit?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    minPurchase?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    refundAble?: BoolFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    youtubeLink?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flashId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    price?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quantity?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discount?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discountUnit?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    visibility?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isApproved?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimateDelivery?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    warranty?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showStock?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tax?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    taxUnit?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    disclaimer?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SubCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => TagUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => ProductAttributeValuesUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductAttributeVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    attributeVariants?: ProductAttributeVariantUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductAttributeUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    productAttribute?: ProductAttributeUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductSpecificationUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    specifications?: ProductSpecificationUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductMetaUncheckedUpdateOneWithoutProductNestedInput, {nullable:true})
    meta?: ProductMetaUncheckedUpdateOneWithoutProductNestedInput;

    @Field(() => OrderProductUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => RefundableUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    refundables?: RefundableUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => WishlistUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    wishlists?: WishlistUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => SectionProductUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    sectionProducts?: SectionProductUncheckedUpdateManyWithoutProductNestedInput;
}
