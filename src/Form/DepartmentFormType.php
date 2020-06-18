<?php

namespace App\Form;

use App\Entity\Department;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class DepartmentFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم القسم',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'ادخل اسم القسم'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('icon')
            ->add('description',TextType::class,[
                'label' => 'وصف القسم',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'ادخل وصف القسم'
                ],
                'required' => false,
            ])
            ->add('keyword',TextType::class,[
                'label' => 'الكلمات الدلالية',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'الكلمات الدلالية للقسم'
                ],
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Department::class,
        ]);
    }
}
