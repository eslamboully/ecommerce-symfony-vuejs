<?php

namespace App\Form;

use App\Entity\Mall;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class MallFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم المجمع التجاري',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'المجمع التجاري'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('Owner',TextType::class,[
                'label' => 'المسؤول',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'المسؤول'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('email',TextType::class,[
                'label' => 'البريد الالكتروني الرسمي',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'البريد الالكتروني الرسمي'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('phone',TextType::class,[
                'label' => 'رقم الهاتف',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'رقم الهاتف'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('address',TextType::class,[
                'label' => 'العنوان',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'العنوان'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Mall::class,
        ]);
    }
}
