<?php

namespace App\Controller\Dashboard;

use App\Entity\Shipping;
use App\Form\ShippingFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/shippings/", name="dashboard.shippings.")
 */
class ShippingController extends AbstractController
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
        $shippings = $this->getDoctrine()->getRepository(Shipping::class)->findAll();
        return $this->render('dashboard/shippings/index.html.twig', [
            'shippings' => $shippings
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $shipping = new Shipping();
        $form = $this->createForm(ShippingFormType::class,$shipping);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $shipping->setName($form->get('name')->getData());
            $shipping->setUser($form->get('User')->getData());
            $shipping->setAddress($form->get('address')->getData());
            $shipping->setLat($form->get('lat')->getData());
            $shipping->setLng($form->get('lng')->getData());

            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_shipping'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $shipping->setIcon($newLogoName);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($shipping);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.shippings.index');

        }

        return $this->render('dashboard/shippings/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $shipping = $this->getDoctrine()->getRepository(Shipping::class)->find($id);
        $form = $this->createForm(ShippingFormType::class,$shipping);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $shipping->setName($form->get('name')->getData());
            $shipping->setUser($form->get('User')->getData());
            $shipping->setAddress($form->get('address')->getData());
            $shipping->setLat($form->get('lat')->getData());
            $shipping->setLng($form->get('lng')->getData());

            if ($form->get('icon')->getData())
            {
                $logo = $form->get('icon')->getData();
                $originalFilename = pathinfo($logo->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$logo->guessExtension();
                try {
                    $logo->move(
                        $this->getParameter('uploads_shipping'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $shipping->setIcon($newLogoName);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($shipping);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.shippings.index');

        }

        return $this->render('dashboard/shippings/edit.html.twig',[
            'form' => $form->createView(),
            'shipping' => $shipping
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Shipping::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.shippings.index');
    }
}
