<?php

namespace App\Controller\Dashboard;

use App\Entity\Country;
use App\Form\CountryFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/countries/", name="dashboard.countries.")
 */
class CountryController extends AbstractController
{
    private $encoder;
    private $slugger;

    public function __construct(UserPasswordEncoderInterface $encoder,SluggerInterface $slugger)
    {
        $this->encoder = $encoder;
        $this->slugger = $slugger;
    }

    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $countries = $this->getDoctrine()
            ->getRepository(Country::class)
            ->findAll();
        return $this->render('dashboard/countries/index.html.twig', compact('countries'));
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $country = new Country();
        $form = $this->createForm(CountryFormType::class, $country);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $country->setName($form->get('name')->getData());
            $country->setMob($form->get('mob')->getData());
            $country->setCode($form->get('code')->getData());

            if ($form->get('logo')->getData())
            {
                $logo = $form->get('logo')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_countries'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $country->setLogo($newLogoName);
            }

            $entityManager->persist($country);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.countries.index');
        }
        return $this->render('dashboard/countries/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $country = $this->getDoctrine()->getRepository(Country::class)->find($id);
        $form = $this->createForm(CountryFormType::class, $country);
        $form->handleRequest($request);
        // dd($form);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $country->setName($form->get('name')->getData());
            $country->setMob($form->get('mob')->getData());
            $country->setCode($form->get('code')->getData());

            if ($form->get('logo')->getData())
            {
                $logo = $form->get('logo')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_countries'),
                        $newLogoName
                    );
                    // $filesystem = new Filesystem();
                    // $filesystem->remove(['symlink', $this->getParameter('uploads_directory'), $country->getNoPathLogo()]);
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $country->setLogo($newLogoName);
            }

            $entityManager->persist($country);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();
            return $this->redirectToRoute('dashboard.countries.index');
        }
        return $this->render('dashboard/countries/edit.html.twig',[
            'form'  => $form->createView()
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Country::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.countries.index');
    }
}
