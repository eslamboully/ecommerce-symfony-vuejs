<?php

namespace App\Controller\Dashboard;

use App\Entity\Mall;
use App\Form\MallFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/malls/", name="dashboard.malls.")
 */
class MallController extends AbstractController
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
        $malls = $this->getDoctrine()->getRepository(Mall::class)->findAll();
        return $this->render('dashboard/malls/index.html.twig', [
            'malls' => $malls
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $mall = new Mall();
        $form = $this->createForm(MallFormType::class,$mall);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $mall->setName($form->get('name')->getData());
            $mall->setEmail($form->get('email')->getData());
            $mall->setOwner($form->get('Owner')->getData());
            $mall->setPhone($form->get('phone')->getData());
            $mall->setAddress($form->get('address')->getData());


            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($mall);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.malls.index');

        }

        return $this->render('dashboard/malls/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $mall = $this->getDoctrine()->getRepository(Mall::class)->find($id);
        $form = $this->createForm(MallFormType::class,$mall);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $mall->setName($form->get('name')->getData());
            $mall->setEmail($form->get('email')->getData());
            $mall->setOwner($form->get('Owner')->getData());
            $mall->setPhone($form->get('phone')->getData());
            $mall->setAddress($form->get('address')->getData());

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($mall);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.malls.index');

        }

        return $this->render('dashboard/malls/edit.html.twig',[
            'form' => $form->createView(),
            'shipping' => $mall
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Mall::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.malls.index');
    }
}
