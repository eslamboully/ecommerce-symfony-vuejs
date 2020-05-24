<?php

namespace App\Controller\Dashboard;

use App\Entity\Department;
use App\Form\DepartmentFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/dashboard/departments/", name="dashboard.departments.")
 */
class DepartmentController extends AbstractController
{
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $departments = json_encode($this->departments_tree(),JSON_PRETTY_PRINT);
        return $this->render('dashboard/departments/index.html.twig',[
            'departments' => $departments,
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $department = new Department();
        $form = $this->createForm(DepartmentFormType::class,$department);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            // dd($request->request->all());
            $department->setName($form->get('name')->getData());
            $department->setIcon($form->get('icon')->getData());
            $department->setDescription($form->get('description')->getData());
            $department->setKeyword($form->get('keyword')->getData());

            $parent = $em->find(Department::class,$request->request->get('parent_id'));
            $department->setParent($parent);

            $em->persist($department);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $em->flush();

            return $this->redirectToRoute('dashboard.departments.create');
        }

        $departments = json_encode($this->departments_tree(),JSON_PRETTY_PRINT);

        return $this->render('dashboard/departments/create.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $em = $this->getDoctrine()->getManager();
        $department = $em->find(Department::class,$id);
        $form = $this->createForm(DepartmentFormType::class,$department);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $department->setName($form->get('name')->getData());
            $department->setIcon($form->get('icon')->getData());
            $department->setDescription($form->get('description')->getData());
            $department->setKeyword($form->get('keyword')->getData());

            $parent = $em->find(Department::class,$request->request->get('parent_id'));
            $department->setParent($parent);

            $em->persist($department);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $em->flush();

            return $this->redirectToRoute('dashboard.departments.index');
        }

        $parentId = $department->getParent() ? $department->getParent()->getId() : null;
        $departments = json_encode($this->departments_tree($id,$parentId),JSON_PRETTY_PRINT);

        return $this->render('dashboard/departments/edit.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $em = $this->getDoctrine()->getManager();
        $department = $em->find(Department::class,$id);

        $em->remove($department);
        $this->addFlash('success','تم الحذف بنجاح');
        $em->flush();
        return $this->redirectToRoute('dashboard.departments.index');
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
