<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,
                [
                    'label' => 'اسم المستخدم',
                    'attr'=> [
                        'class'=>'form-control',
                        'placeholder' => 'اسم المستخدم الجديد'
                    ],
                    'required' => false,
                    'constraints' => [new NotBlank(),new Length(['min'=>3,'max' => 180])]
                ])
            ->add('email',TextType::class,
                [
                    'label' => 'البريد الالكتروني',
                    'attr'=> [
                        'class' => 'form-control',
                        'placeholder' => 'البريد الالكتروني للمستخدم'
                    ],
                    'required' => false,
                    'constraints' => [new NotBlank(),new Length(['min'=>3,'max' => 180])]
                ])
            ->add('phone',TextType::class,
                [
                    'label' => 'رقم الهاتف',
                    'attr'=> [
                        'class' => 'form-control',
                        'placeholder' => 'يجب ان يكون رقم حقيقي حتي نتواصل معك عند الطلب'
                    ],
                    'required' => false,
                    'constraints' => [new NotBlank(),new Length(['min'=>3,'max' => 13])]
                ])
            ->add('password',PasswordType::class,
                [
                    'label' => 'كلمة المرور',
                    'attr' => [
                        'class' => 'form-control',
                        'placeholder' => 'كلمة مرور المستخدم'
                    ],
                    'required' => true,
                    'constraints' => [new Length(['min'=>8])]
                ])
            ->add('type',ChoiceType::class,[
                'label' => 'نوع المستخدم',
                'attr' => [
                    'class' => 'form-control',
                ],
                'choices' => [
                    'صلاحية المستخدم' => '',
                    'عضو' => 1,
                    'متجر' => 2,
                    'شركة' => 3,
                ],
                'constraints' => [new NotBlank()]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'csrf_protection' => true,
            // Rest of options omitted
        );
    }
}
