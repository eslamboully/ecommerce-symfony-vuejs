<?php

namespace App\Form;

use App\Entity\City;
use App\Entity\Country;
use App\Entity\State;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class StateFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم المنطقة او الحي',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'المنطقة او الحي',
                ],
                'constraints' => [new NotBlank(),new Length(['min'=>3])]
            ])
            ->add('Country',EntityType::class,[
                'label' => 'اختر الدولة',
                'attr'=> [
                    'class' => 'form-control'
                ],
                'class' => Country::class,
                'choice_label' => 'name',
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('City',EntityType::class,[
                'label' => 'اختر المدينة او المحافظة',
                'attr'=> [
                    'class' => 'form-control'
                ],
                'class' => City::class,
                'choice_label' => 'name',
                'required' => false,
                'constraints' => [new NotBlank()]
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => State::class,
        ]);
    }
}
