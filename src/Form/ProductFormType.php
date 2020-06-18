<?php

namespace App\Form;

use App\Entity\Color;
use App\Entity\Country;
use App\Entity\ManuFact;
use App\Entity\Product;
use App\Entity\Size;
use App\Entity\Trademark;
use App\Entity\Weight;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ProductFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title',TextType::class,[
                'label' => 'عنوان المنتج*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اكتب عنوان المنتج'
                ],
                'required' => false,
                'constraints' => [new NotBlank() ,new Length(['max' => '100'])]
            ])
            ->add('content',TextareaType::class,[
                'label' => 'تفاصيل المنتج*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'تفاصيل المنتج',
                    'style' => "width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('price',NumberType::class,[
                'label' => 'سعر المنتج*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اكتب سعر المنتج'
                ],
                'required' => false,
                // 'constraints' => [new NotBlank()]
            ])
            ->add('stock',NumberType::class,[
                'label' => 'المخزن*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'العدد الموجود في المخزن'
                ],
                'required' => false,
                // 'constraints' => [new NotBlank()]
            ])
            ->add('start_at',DateType::class,[
                'label' => 'يبدأ في*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'يبدأ عرضه في'
                ],
                'required' => false,
                // 'constraints' => [new NotBlank()]
            ])
            ->add('end_at',DateType::class,[
                'label' => 'ينتهي في*',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'ينتهي عرضه في'
                ],
                'required' => false,
                // 'constraints' => [new NotBlank()]
            ])
            ->add('price_offer',NumberType::class,[
                'label' => 'سعر العرض الخاص',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'سعر العرض الخاص'
                ],
                'required' => false,
//                'constraints' => [new NotBlank(),new DecimalType()]
            ])
            ->add('start_offer_at', DateType::class,[
                'label' => 'تاريخ بداية العرض الخاص',
                'attr' => [
                    'class' => 'form-control js-datepicker',
                    'placeholder' => 'تاريخ بداية العرض الخاص'
                ],
                'required' => false,
//                'constraints' => [new NotBlank(),new DecimalType()]
            ])
            ->add('end_offer_at',DateType::class,[
                'label' => 'تاريخ نهاية العرض الخاص',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'تاريخ نهاية العرض الخاص'
                ],
                'required' => false,
//                'constraints' => [new NotBlank(),new DecimalType()]
            ])
            ->add('status',ChoiceType::class,[
                'label' => 'الحالة*',
                'attr' => [
                    'class' => 'form-control',
                ],
                'choices' => [
                    'مفعل' => 1,
                    'بالانتظار' => 2,
                    'مرفوض' => 3,
                ],
                'required' => false,
                // 'constraints' => [new NotBlank()]
            ])
            ->add('reason',TextareaType::class,[
                'label' => 'سبب الرفض',
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
            ])
            ->add('weight',EntityType::class,[
                'label' => 'الوزن',
                'attr' => [
                    'class' => 'form-control',
                ],
                'class' => Weight::class,
                'choice_label' => 'name',
                'required' => false,
            ])
            ->add('weight_string',TextType::class,[
                'label' => 'كمية الوزن',
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
            ])
            ->add('other_data',TextareaType::class,[
                'label' => 'معلومات اضافية',
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
            ])
            ->add('photo',FileType::class,[
                'label' => 'صورة المنتج الرئيسية*',
                'attr' => [
                    'class' => 'form-control',
                ],
                'constraints' => [new File([
                    'maxSize' => '1024K',
                    'mimeTypes' => [
                        'image/jpg',
                        'image/jpeg',
                        'image/png',
                    ],
                    'mimeTypesMessage' => 'الملفات المسموح بها فقط هي jpg,png'
                ])],
                'required' => false,
                'mapped' => false
            ])
            ->add('Trademark',EntityType::class,[
                'label' => 'العلامة التجارية*',
                'attr' => [
                    'class' => 'form-control',
                ],
                'class' => Trademark::class,
                'choice_label' => 'name',
                'required' => false,
                // 'constraints' => [new NotBlank()],
            ])->add('Color',EntityType::class,[
                'label' => 'الالوان المتاحة*',
                'attr' => [
                    'class' => 'form-control select2'
                ],
                'class' => Color::class,
                'choice_label' => 'name',
                // 'constraints' => [new NotBlank()],
                'multiple' => true,
                'required' => false,
            ])
            ->add('Country',EntityType::class,[
                'label' => 'البلاد المتواجد فيها*',
                'attr' => [
                    'class' => 'form-control select2'
                ],
                'class' => Country::class,
                'choice_label' => 'name',
                // 'constraints' => [new NotBlank()],
                'multiple' => true,
                'required' => false,
            ])
            ->add('Size',EntityType::class,[
                'label' => 'المقاسات المتاحة*',
                'attr' => [
                    'class' => 'form-control select2'
                ],
                'class' => Size::class,
                'choice_label' => 'name',
                // 'constraints' => [new NotBlank()],
                'multiple' => true,
                'required' => false,
            ])
            ->add('size_string',TextType::class,[
                'label' => 'اكتب المقاس',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false
            ])
            ->add('ManuFact',EntityType::class,[
                'label' => 'المصنعين*',
                'attr' => [
                    'class' => 'form-control select2'
                ],
                'class' => ManuFact::class,
                'choice_label' => 'name',
                // 'constraints' => [new NotBlank()],
                'multiple' => true,
                'required' => false,
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
