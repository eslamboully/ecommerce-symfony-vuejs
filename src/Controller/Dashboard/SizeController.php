<?php

namespace App\Controller\Dashboard;

use App\Entity\Department;
use App\Entity\Size;
use App\Form\SizeFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/sizes/", name="dashboard.sizes.")
 */
class SizeController extends AbstractController
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
        $sizes = $this->getDoctrine()->getManager()->getRepository(Size::class)->findAll();
        return $this->render('dashboard/sizes/index.html.twig', [
            'sizes' => $sizes,
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $departments = json_encode($this->departments_tree(),JSON_PRETTY_PRINT);
        $entityManager = $this->getDoctrine()->getManager();
        $size = new Size();
        $form = $this->createForm(SizeFormType::class,$size);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $size->setName($form->get('name')->getData());
            $department = $entityManager->find(Department::class,$request->request->get('department_id'));
            $size->setDepartment($department);
            $size->setIsPublic($form->get('is_public')->getData());

            $entityManager->persist($size);
            $entityManager->flush();

            $this->addFlash('success','تمت الاضافة بنجاح');

            return $this->redirectToRoute('dashboard.sizes.index');
        }

        return $this->render('dashboard/sizes/create.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request, $id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $size = $entityManager->getRepository(Size::class)->find($id);
        $departments = json_encode($this->departments_tree(null,$size->getDepartment()->getId()),JSON_PRETTY_PRINT);

        $form = $this->createForm(SizeFormType::class,$size);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $size->setName($form->get('name')->getData());
            $department = $entityManager->find(Department::class,$request->request->get('department_id'));
            $size->setDepartment($department);
            $size->setIsPublic($form->get('is_public')->getData());


            $entityManager->persist($size);
            $entityManager->flush();

            $this->addFlash('success','تمت التعديلات بنجاح');
            return $this->redirectToRoute('dashboard.sizes.index');
        }

        return $this->render('dashboard/sizes/edit.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Size::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.sizes.index');
    }

    public function departments_tree($departmentId = null,$parentId = null)
    {
        $departments = $this->getDoctrine()->getRepository(Department::class)->findAll();
        $finalArr = [];
        foreach ($departments as $index=>$department)
        {
            array_push(
                $finalArr,
                [
                    "id" => $department->getId(),
                    "parent" => $department->getParent() ? $department->getParent()->getId() : "#",
                    "text" => $department->getName(),
                    "state"=>[
                        "opened" => $parentId == $department->getId() ? true : false,
                        "disabled" => $department->getId() == $departmentId ? true : false,
                        "selected" => $parentId == $department->getId() ? true : false
                    ]
                ]
            );
        }
        return $finalArr;
    }
}
