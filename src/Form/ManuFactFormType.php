<?php

namespace App\Form;

use App\Entity\ManuFact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class ManuFactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'الاسم',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اسم المصنع'
                ],
                'constraints' => [new NotBlank()]
            ])
            ->add('contact_name',TextType::class,[
                'label' => 'المسؤول عن المصنع',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'المسؤول عن المصنع'
                ],
                'constraints' => [new NotBlank()]
            ])
            ->add('email',EmailType::class,[
                'label' => 'البريد الالكتروني',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'البريد الالكتروني للمصنع او الشركة'
                ],
                'constraints' => [new NotBlank()]
            ])
            ->add('phone',NumberType::class,[
                'label' => 'الهاتف المحمول',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'الهاتف المحمول',
                ],
                'required' => false
            ])
            ->add('facebook',TextType::class,[
                'label' => 'فيسبوك',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false
            ])
            ->add('twitter',TextType::class,[
                'label' => 'تويتر',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false
            ])
            ->add('icon',FileType::class,[
                'label' => 'شعار المصنع',
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
                'mapped' => false
            ])
            ->add('lat',TextType::class,[
                'label' => 'افقي',
                'attr' => [
                    'class' => 'form-control disabled',
                ],
                'required' => false,
                'constraints' => [new NotBlank()],
            ])
            ->add('lng',TextType::class,[
                'label' => 'رأسي',
                'attr' => [
                    'class' => 'form-control disabled',
                ],
                'required' => false,
                'constraints' => [new NotBlank()],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ManuFact::class,
        ]);
    }
}
