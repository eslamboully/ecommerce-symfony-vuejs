<?php

namespace App\Controller\Dashboard;

use App\Entity\Admin;
use App\Form\AdminFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/dashboard/admins/", name="dashboard.admins.")
 */
class AdminController extends AbstractController
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $admins = $this->getDoctrine()
            ->getRepository(Admin::class)
            ->where('email','!=','admin@admin.com');
        return $this->render('dashboard/admins/index.html.twig', compact('admins'));
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $admin = new Admin();
        $form = $this->createForm(AdminFormType::class, $admin);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $admin->setName($form->get('name')->getData());
            $admin->setEmail($form->get('email')->getData());
            $admin->setPassword($this->encoder->encodePassword($admin,$form->get('password')->getData()));

            $entityManager->persist($admin);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.admins.index');
        }
        return $this->render('dashboard/admins/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $admin = $this->getDoctrine()->getRepository(Admin::class)->find($id);
        $form = $this->createForm(AdminFormType::class, $admin);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $admin->setName($form->get('name')->getData());
            $admin->setEmail($form->get('email')->getData());
            $admin->setPassword($this->encoder->encodePassword($admin,$form->get('password')->getData()));

            $entityManager->persist($admin);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.admins.index');
        }
        return $this->render('dashboard/admins/edit.html.twig',[
            'form'  => $form->createView(),
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Admin::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.admins.index');
    }
}
