<?php

namespace App\Form;

use App\Entity\Admin;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class AdminFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,
                [
                    'label' => 'اسم المشرف',
                    'attr'=> [
                        'class'=>'form-control',
                        'placeholder' => 'اسم المشرف الجديد'
                    ],
                    'required' => false,
                    'constraints' => [new NotBlank(),new Length(['min'=>3,'max' => 180])]
                ])
            ->add('email',TextType::class,
                [
                    'label' => 'البريد الالكتروني',
                    'attr'=> [
                        'class' => 'form-control',
                        'placeholder' => 'البريد الالكتروني للمشرف'
                    ],
                    'required' => false,
                    'constraints' => [new NotBlank(),new Length(['min'=>3,'max' => 180])]
                ])
            ->add('password',PasswordType::class,
                [
                    'label' => 'كلمة المرور',
                    'attr' => [
                        'class' => 'form-control',
                        'placeholder' => 'كلمة مرور المشرف الجديد'
                    ],
                    'required' => true,
                    'constraints' => [new Length(['min'=>8])]
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Admin::class,
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
