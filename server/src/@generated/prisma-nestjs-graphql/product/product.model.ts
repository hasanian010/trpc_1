import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Seller } from '../seller/seller.model';
import { MainCategory } from '../main-category/main-category.model';
import { Category } from '../category/category.model';
import { SubCategory } from '../sub-category/sub-category.model';
import { Brand } from '../brand/brand.model';
import { Tag } from '../tag/tag.model';
import { Flash } from '../flash/flash.model';
import { ProductAttributeValues } from '../product-attribute-values/product-attribute-values.model';
import { ProductAttributeVariant } from '../product-attribute-variant/product-attribute-variant.model';
import { ProductAttribute } from '../product-attribute/product-attribute.model';
import { ProductSpecification } from '../product-specification/product-specification.model';
import { ProductMeta } from '../product-meta/product-meta.model';
import { OrderProduct } from '../order-product/order-product.model';
import { Refundable } from '../refundable/refundable.model';
import { Wishlist } from '../wishlist/wishlist.model';
import { Review } from '../review/review.model';
import { SectionProduct } from '../section-product/section-product.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    mainCategoryId!: string;

    @Field(() => String, {nullable:true})
    categoryId!: string | null;

    @Field(() => String, {nullable:true})
    brandId!: string | null;

    @Field(() => String, {nullable:true})
    unit!: string | null;

    @Field(() => String, {nullable:true})
    minPurchase!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    refundAble!: boolean;

    @Field(() => [String], {nullable:true})
    images!: Array<string>;

    @Field(() => String, {nullable:true})
    youtubeLink!: string | null;

    @Field(() => String, {nullable:true})
    flashId!: string | null;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    quantity!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    visibility!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isApproved!: boolean;

    @Field(() => String, {nullable:true})
    estimateDelivery!: string | null;

    @Field(() => String, {nullable:true})
    warranty!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    showStock!: boolean;

    @Field(() => String, {nullable:false})
    tax!: string;

    @Field(() => String, {nullable:false})
    taxUnit!: string;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    disclaimer!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Seller, {nullable:false})
    seller?: Seller;

    @Field(() => MainCategory, {nullable:false})
    mainCategory?: MainCategory;

    @Field(() => Category, {nullable:true})
    category?: Category | null;

    @Field(() => [SubCategory], {nullable:true})
    subCategories?: Array<SubCategory>;

    @Field(() => Brand, {nullable:true})
    brand?: Brand | null;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => Flash, {nullable:true})
    flash?: Flash | null;

    @Field(() => [ProductAttributeValues], {nullable:true})
    attributeValues?: Array<ProductAttributeValues>;

    @Field(() => [ProductAttributeVariant], {nullable:true})
    attributeVariants?: Array<ProductAttributeVariant>;

    @Field(() => [ProductAttribute], {nullable:true})
    productAttribute?: Array<ProductAttribute>;

    @Field(() => [ProductSpecification], {nullable:true})
    specifications?: Array<ProductSpecification>;

    @Field(() => ProductMeta, {nullable:true})
    meta?: ProductMeta | null;

    @Field(() => [OrderProduct], {nullable:true})
    orderProducts?: Array<OrderProduct>;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => [Wishlist], {nullable:true})
    wishlists?: Array<Wishlist>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [SectionProduct], {nullable:true})
    sectionProducts?: Array<SectionProduct>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
