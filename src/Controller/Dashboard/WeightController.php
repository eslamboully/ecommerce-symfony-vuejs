<?php

namespace App\Controller\Dashboard;

use App\Entity\Weight;
use App\Form\WeightFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/weights/", name="dashboard.weights.")
 */
class WeightController extends AbstractController
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
        $weights = $this->getDoctrine()->getRepository(Weight::class)->findAll();
        return $this->render('dashboard/weights/index.html.twig', [
            'weights' => $weights
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $weight = new Weight();
        $form = $this->createForm(WeightFormType::class,$weight);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $weight->setName($form->get('name')->getData());

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($weight);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.weights.index');

        }

        return $this->render('dashboard/weights/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $weight = $this->getDoctrine()->getRepository(Weight::class)->find($id);
        $form = $this->createForm(WeightFormType::class,$weight);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $weight->setName($form->get('name')->getData());

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($weight);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.weights.index');

        }

        return $this->render('dashboard/weights/edit.html.twig',[
            'form' => $form->createView(),
            'shipping' => $weight
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Weight::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.weights.index');
    }
}
