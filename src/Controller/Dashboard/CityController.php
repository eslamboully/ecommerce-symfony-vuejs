<?php

namespace App\Controller\Dashboard;
use App\Entity\City;
use App\Form\CityFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("dashboard/cities/", name="dashboard.cities.")
 */
class CityController extends AbstractController
{
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $cities = $this->getDoctrine()->getRepository(City::class)->findAll();
        return $this->render('dashboard/cities/index.html.twig', [
            'cities' => $cities,
        ]);
    }
    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $city = new City();
        $form = $this->createForm(CityFormType::class,$city);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $entityManager = $this->getDoctrine()->getManager();
            $city->setName($form->get('name')->getData());
            $city->setCountry($form->get('Country')->getData());

            $entityManager->persist($city);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            return $this->redirectToRoute('dashboard.cities.index');
        }
        return $this->render('dashboard/cities/create.html.twig',[
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $city = $this->getDoctrine()->getRepository(City::class)->find($id);
        $form = $this->createForm(CityFormType::class,$city);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $em = $this->getDoctrine()->getManager();
            $city->setName($form->get('name')->getData());
            $city->setCountry($form->get('Country')->getData());

            $em->persist($city);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $em->flush();
            return $this->redirectToRoute('dashboard.cities.index');
        }

        return $this->render('dashboard/cities/edit.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $city = $this->getDoctrine()->getRepository(City::class)->find($id);
        $em = $this->getDoctrine()->getManager();
        $em->remove($city);
        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.cities.index');
    }
}
