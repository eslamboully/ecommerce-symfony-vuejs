<?php

namespace App\Form;

use App\Entity\Color;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class ColorFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم اللون',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اسم اللون'
                ],
                'required' => false,
                'constraints' => [new NotBlank(),new Length(['min' => 3])]
            ])
            ->add('color',ColorType::class,[
                'label' => 'اللون',
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Color::class,
        ]);
    }
}
