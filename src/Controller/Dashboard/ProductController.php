<?php

namespace App\Controller\Dashboard;

use App\Entity\Department;
use App\Entity\Product;
use App\Form\ProductFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/dashboard/products/", name="dashboard.products.")
 */
class ProductController extends AbstractController
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
        $products = $this->getDoctrine()->getRepository(Product::class)->findAll();
        return $this->render('dashboard/products/index.html.twig', [
            'products' => $products
        ]);
    }

    /**
     * @Route("create", name="create")
     */
    public function create(Request $request)
    {
        $departments = json_encode($this->departments_tree(),JSON_PRETTY_PRINT);
        $product = new Product();
        $form = $this->createForm(ProductFormType::class,$product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            // standard
            $product->setTitle($form->get('title')->getData());
            $product->setContent($form->get('content')->getData());

            $department = $this->getDoctrine()->getRepository(Department::class)->find($request->request->get('department_id'));
            $product->setDepartment($department);
            $product->setPrice($form->get('price')->getData());
            $product->setStock($form->get('stock')->getData());
            $product->setStartAt($form->get('start_at')->getData());
            $product->setEndAt($form->get('end_at')->getData());
            $product->setPriceOffer($form->get('price_offer')->getData());
            $product->setStartOfferAt($form->get('start_offer_at')->getData());
            $product->setEndOfferAt($form->get('end_offer_at')->getData());
            $product->setStatus($form->get('status')->getData());
            $product->setReason($form->get('reason')->getData());
            $product->setWeight($form->get('weight')->getData());
            $product->setWeightString($form->get('weight_string')->getData());
            $product->setTrademark($form->get('Trademark')->getData());
            $product->setOtherData($form->get('other_data')->getData());


            // many to many relation
            foreach ($form->get('Color')->getData() as $color){
                $product->addColor($color);
            }

            foreach ($form->get('Country')->getData() as $country){
                $product->addCountry($country);
            }
            foreach ($form->get('Size')->getData() as $size){
                $product->addSize($size);
            }
            foreach ($form->get('ManuFact')->getData() as $manufact){
                $product->addManuFact($manufact);
            }

            // photo
            if ($form->get('photo')->getData())
            {
                $icon = $form->get('photo')->getData();
                $originalFilename = pathinfo($icon->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$icon->guessExtension();
                try {
                    $icon->move(
                        $this->getParameter('uploads_product'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $product->setPhoto($newLogoName);
            }



            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($product);
            $this->addFlash('success','تمت الاضافة بنجاح');
            $entityManager->flush();

            if ($request->request->has('save_and_continue'))
            {
                return $this->redirectToRoute('dashboard.products.edit',['id'=>$product->getId()]);
            }
            return $this->redirectToRoute('dashboard.products.index');

        }

        return $this->render('dashboard/products/create.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $product = $this->getDoctrine()->getRepository(Product::class)->find($id);
        $departments = json_encode($this->departments_tree(null,$product->getDepartment() ? $product->getDepartment()->getId() : null),JSON_PRETTY_PRINT);
        $form = $this->createForm(ProductFormType::class,$product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            // standard
            $product->setTitle($form->get('title')->getData());
            $product->setContent($form->get('content')->getData());

            $department = $this->getDoctrine()->getRepository(Department::class)->find($request->request->get('department_id'));
            $product->setDepartment($department);
            $product->setPrice($form->get('price')->getData());
            $product->setStock($form->get('stock')->getData());
            $product->setStartAt($form->get('start_at')->getData());
            $product->setEndAt($form->get('end_at')->getData());
            $product->setPriceOffer($form->get('price_offer')->getData());
            $product->setStartOfferAt($form->get('start_offer_at')->getData());
            $product->setEndOfferAt($form->get('end_offer_at')->getData());
            $product->setStatus($form->get('status')->getData());
            $product->setReason($form->get('reason')->getData());
            $product->setWeight($form->get('weight')->getData());
            $product->setWeightString($form->get('weight_string')->getData());
            $product->setTrademark($form->get('Trademark')->getData());
            $product->setOtherData($form->get('other_data')->getData());


            // many to many relation
            foreach ($form->get('Color')->getData() as $color){
                $product->addColor($color);
            }

            foreach ($form->get('Country')->getData() as $country){
                $product->addCountry($country);
            }
            foreach ($form->get('Size')->getData() as $size){
                $product->addSize($size);
            }
            foreach ($form->get('ManuFact')->getData() as $manufact){
                $product->addManuFact($manufact);
            }

            // photo edit
            if ($form->get('photo_edit')->getData())
            {
                $icon = $form->get('photo_edit')->getData();
                $originalFilename = pathinfo($icon->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFilename);
                $newLogoName = $safeFilename.'-'.uniqid().'.'.$icon->guessExtension();
                try {
                    $icon->move(
                        $this->getParameter('uploads_product'),
                        $newLogoName
                    );
                } catch (FileException $e) {
                    new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                }
                $product->setPhoto($newLogoName);
            }



            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($product);
            $this->addFlash('success','تمت التعديلات بنجاح');
            $entityManager->flush();

            if ($request->request->has('save_and_continue'))
            {
                return $this->redirectToRoute('dashboard.products.edit',['id'=>$product->getId()]);
            }
            return $this->redirectToRoute('dashboard.products.index');

        }

        return $this->render('dashboard/products/edit.html.twig',[
            'form' => $form->createView(),
            'departments' => $departments,
            'product' => $product
        ]);
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $er = $this->getDoctrine()->getRepository(Product::class);
        $row = $er->find($id);

        $em = $this->getDoctrine()->getManager();
        $em->remove($row);

        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.products.index');
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
