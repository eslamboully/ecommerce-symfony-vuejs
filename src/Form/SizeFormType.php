<?php

namespace App\Form;

use App\Entity\Size;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class SizeFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'المقاس',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اكتب المقاس سواء عام او خاص',
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('is_public',ChoiceType::class,[
                'label' => 'مقاس عام',
                'attr' => [
                    'class' => 'form-control',
                ],
                'choices' => [
                    'نعم' => 1,
                    'لا' => 0,
                ],
                'constraints' => [new NotBlank()]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Size::class,
        ]);
    }
}
