<?php

namespace App\Controller\Dashboard;

use App\Entity\User;
use App\Form\UserFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/dashboard/users/", name="dashboard.users.")
 */
class UserController extends AbstractController
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * @Route("index", name="index")
     */
    public function index(Request $request)
    {
        if ($request->query->has('type'))
        {
            $users = $this->getDoctrine()
                ->getRepository(User::class)
                ->findBy(['type' => $request->query->get('type')]);
        }else{
            $users = $this->getDoctrine()
                ->getRepository(User::class)
                ->findAll();
        }

        return $this->render('dashboard/users/index.html.twig', compact('users'));
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $user = new User();
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $user->setName($form->get('name')->getData());
            $user->setPhone($form->get('phone')->getData());
            $user->setType($form->get('type')->getData());
            $user->setPassword($this->encoder->encodePassword($user,$form->get('password')->getData()));

            $entityManager->persist($user);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.users.index');
        }
        return $this->render('dashboard/users/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $user->setName($form->get('name')->getData());
            $user->setEmail($form->get('email')->getData());
            $user->setPhone($form->get('phone')->getData());
            $user->setType($form->get('type')->getData());
            if ($form->get('password')->getData())
            {
                $user->setPassword($this->encoder->encodePassword($user,$form->get('password')->getData()));
            }

            $entityManager->persist($user);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.users.index');
        }
        return $this->render('dashboard/users/edit.html.twig',[
            'form'  => $form->createView()
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(User::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.users.index');
    }
}
