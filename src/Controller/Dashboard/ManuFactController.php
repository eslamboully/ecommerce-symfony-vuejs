<?php

namespace App\Controller\Dashboard;

use App\Entity\ManuFact;
use App\Form\ManuFactFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/manufacts/", name="dashboard.manufacts.")
 */
class ManuFactController extends AbstractController
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $manufacts = $this->getDoctrine()->getRepository(ManuFact::class)->findAll();
        return $this->render('dashboard/manufacts/index.html.twig', [
            'manufacts' => $manufacts,
        ]);
    }
    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $manufact = new ManuFact();
        $form = $this->createForm(ManuFactFormType::class,$manufact);
        $form->handleRequest($request);

        // dd($request->request->all());
        if ($form->isSubmitted() && $form->isValid())
        {
            $manufact->setName($form->get('name')->getData());
            $manufact->setContactName($form->get('contact_name')->getData());
            $manufact->setEmail($form->get('email')->getData());
            $manufact->setPhone($form->get('phone')->getData());
            $manufact->setFacebook($form->get('facebook')->getData());
            $manufact->setTwitter($form->get('twitter')->getData());
            $manufact->setLng($form->get('lng')->getData());
            $manufact->setLat($form->get('lat')->getData());

            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_manufacts'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $manufact->setIcon($newLogoName);
            }

            $entityManager->persist($manufact);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.manufacts.index');
        }

        return $this->render('dashboard/manufacts/create.html.twig',[
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $manufact = $entityManager->find(ManuFact::class,$id);
        $form = $this->createForm(ManuFactFormType::class,$manufact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $manufact->setName($form->get('name')->getData());
            $manufact->setContactName($form->get('contact_name')->getData());
            $manufact->setEmail($form->get('email')->getData());
            $manufact->setPhone($form->get('phone')->getData());
            $manufact->setFacebook($form->get('facebook')->getData());
            $manufact->setTwitter($form->get('twitter')->getData());
            $manufact->setLng($form->get('lng')->getData());
            $manufact->setLat($form->get('lat')->getData());

            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_manufacts'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $manufact->setIcon($newLogoName);
            }

            $entityManager->persist($manufact);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.manufacts.index');
        }
        return $this->render('dashboard/manufacts/edit.html.twig',[
            'form' => $form->createView(),
            'manufact' => $manufact
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(ManuFact::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.manufacts.index');
    }
}
