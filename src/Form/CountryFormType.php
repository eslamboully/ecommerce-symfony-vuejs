<?php

namespace App\Form;

use App\Entity\Country;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class CountryFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,[
                'label' => 'البلد',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'اسم البلد',
                ],
                'required' => false,
                'constraints' => [new NotBlank(),new Length(['max'=> 180])]
            ])
            ->add('mob',TextType::class,[
                'label' => 'اختار/رمز الدولة',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'رمز الدولة مثلا مصر EG',
                ],
                'required' => false,
                'constraints' => [new NotBlank(),new Length(['max'=>180])]
            ])
            ->add('code',TextType::class,[
                'label' => 'كود الدولة',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'كود الدولة مثلا مصر : +20'
                ],
                'required' => false,
                'constraints' => [new NotBlank(),new Length(['max'=>180])],
            ])
            ->add('logo',FileType::class,[
                'label' => 'شعار الدولة',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => '',
                ],
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpg',
                            'image/jpeg',
                            'image/png',
                        ],
                        'mimeTypesMessage' => 'الملفات المسموح بها فقط هي jpg,png',
                    ]),
                ],
                'mapped' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Country::class,
        ]);
    }
}
