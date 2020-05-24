<?php

namespace App\Controller\Dashboard;

use App\Entity\Country;
use App\Entity\State;
use App\Form\StateFormType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/dashboard/states/", name="dashboard.states.")
 */
class StateController extends AbstractController
{
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $states = $this->getDoctrine()->getRepository(State::class)->findAll();
        return $this->render('dashboard/states/index.html.twig',[
            'states' => $states
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $state = new State();
        $form = $this->createForm(StateFormType::class,$state);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $em = $this->getDoctrine()->getManager();
            $state->setName($form->get('name')->getData());
            $state->setCountry($form->get('Country')->getData());
            $state->setCity($form->get('City')->getData());

            $em->persist($state);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $em->flush();
            return $this->redirectToRoute('dashboard.states.index');
        }

        return $this->render('dashboard/states/create.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $state = $this->getDoctrine()->getRepository(State::class)->find($id);
        $form = $this->createForm(StateFormType::class,$state);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $em = $this->getDoctrine()->getManager();
            $state->setName($form->get('name')->getData());
            $state->setCountry($form->get('Country')->getData());
            $state->setCity($form->get('City')->getData());

            $em->persist($state);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $em->flush();
            return $this->redirectToRoute('dashboard.states.index');
        }

        return $this->render('dashboard/states/edit.html.twig',[
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("specific-state", name="specific.state", methods={"post"})
     * @return JsonResponse
     */
    public function specific(Request $request,SerializerInterface $serializer)
    {
        $relatedCities = $this->getDoctrine()
            ->getRepository(Country::class)
            ->find($request->request->get('id'))->getCities();

        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);

        $relatedCities = $serializer->serialize($relatedCities, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return new Response($relatedCities, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $em = $this->getDoctrine()->getManager();
        $state = $em->find(State::class,$id);
        $em->remove($state);
        $this->addFlash('success','تم الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.states.index');
    }
}
