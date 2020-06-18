<?php

namespace App\Controller\Dashboard;

use App\Entity\Color;
use App\Form\ColorFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/colors/", name="dashboard.colors.")
 */
class ColorController extends AbstractController
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
        $colors = $this->getDoctrine()->getRepository(Color::class)->findAll();
        return $this->render('dashboard/colors/index.html.twig', [
            'colors' => $colors
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $color = new Color();
        $form = $this->createForm(ColorFormType::class,$color);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $color->setName($form->get('name')->getData());
            $color->setColor($form->get('color')->getData());


            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($color);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.colors.index');

        }

        return $this->render('dashboard/colors/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $color = $this->getDoctrine()->getRepository(Color::class)->find($id);
        $form = $this->createForm(ColorFormType::class,$color);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $color->setName($form->get('name')->getData());
            $color->setColor($form->get('color')->getData());

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($color);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.colors.index');

        }

        return $this->render('dashboard/colors/edit.html.twig',[
            'form' => $form->createView(),
            'shipping' => $color
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Color::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.colors.index');
    }
}
