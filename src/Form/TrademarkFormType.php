<?php

namespace App\Form;

use App\Entity\Trademark;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class TrademarkFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'اسم العلامة التجارية',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اسم العلامة التجارية مثل اديداس'
                ],
                'required' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('icon',FileType::class,[
                'label' => 'صورة العلامة التجارية',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024K',
                        'mimeTypes' => [
                            'image/jpg',
                            'image/jpeg',
                            'image/png'
                        ],
                        'mimeTypesMessage' => 'الملفات المسموح بها فقط هي jpg,png'
                    ])
                ],
                'mapped' => false

            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trademark::class,
        ]);
    }
}
