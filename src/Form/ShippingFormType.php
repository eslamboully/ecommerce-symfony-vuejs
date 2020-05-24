<?php

namespace App\Form;

use App\Entity\Shipping;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Doctrine\ORM\EntityRepository;

class ShippingFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم شركة الشحن',
                'attr' => [
                    'class' => 'form-control'
                ],
                'constraints' => [new NotBlank()]
            ])
            ->add('User',EntityType::class,[
                'label' => 'المالك',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->andWhere('u.type = 3')
                        ->orderBy('u.id', 'ASC');
                },
                'placeholder' => 'اختر مالك الشركة',
                'choice_label' => 'name',
                'class' => User::class,
                'constraints' => [new NotBlank()]
            ])
            ->add('icon',FileType::class,[
                'label' => 'الشعار',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false,
                'mapped' => false,
                'constraints' => [new File([
                    'maxSize' => '1024K',
                    'mimeTypes' => [
                        'image/jpg',
                        'image/jpeg',
                        'image/png',
                    ],
                    'mimeTypesMessage' => 'الملفات المسموح بها فقط هي jpg,png'
                ])],
            ])
            ->add('address',TextType::class,[
                'label' => 'عنوان الشركة',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false,
            ])
            ->add('lat',TextType::class,[
                'label' => 'افقي',
                'attr' => [
                    'class' => 'form-control disabled',
                ],
                'required' => false,
            ])
            ->add('lng',TextType::class,[
                'label' => 'رأسي',
                'attr' => [
                    'class' => 'form-control disabled',
                ],
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Shipping::class,
        ]);
    }
}
