<?php

namespace App\Controller\Dashboard;

use App\Entity\Trademark;
use App\Form\TrademarkFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/trademarks/", name="dashboard.trademarks.")
 */
class TrademarkController extends AbstractController
{
    protected $slugger;
    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $trademarks = $this->getDoctrine()->getManager()->getRepository(Trademark::class)->findAll();
        return $this->render('dashboard/trademarks/index.html.twig', [
            'trademarks' => $trademarks,
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $trademark = new Trademark();
        $form = $this->createForm(TrademarkFormType::class,$trademark);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $trademark->setName($form->get('name')->getData());
            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newIconName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_trademarks'),
                        $newIconName
                    );
                    // $filesystem = new Filesystem();
                    // $filesystem->remove(['symlink', $this->getParameter('uploads_directory'), $country->getNoPathLogo()]);
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $trademark->setIcon($newIconName);
            }
            $entityManager->persist($trademark);
            $entityManager->flush();

            $this->addFlash('success','تمت الاضافة بنجاح');

            return $this->redirectToRoute('dashboard.trademarks.index');
        }

        return $this->render('dashboard/trademarks/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request, $id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $trademark = $entityManager->getRepository(Trademark::class)->find($id);
        $form = $this->createForm(TrademarkFormType::class,$trademark);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $trademark->setName($form->get('name')->getData());
            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newIconName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_trademarks'),
                        $newIconName
                    );
                    // $filesystem = new Filesystem();
                    // $filesystem->remove(['symlink', $this->getParameter('uploads_directory'), $country->getNoPathLogo()]);
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $trademark->setIcon($newIconName);
            }

            $entityManager->persist($trademark);
            $entityManager->flush();

            $this->addFlash('success','تمت التعديلات بنجاح');
            return $this->redirectToRoute('dashboard.trademarks.index');
        }

        return $this->render('dashboard/trademarks/edit.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Trademark::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.trademarks.index');
    }
}
