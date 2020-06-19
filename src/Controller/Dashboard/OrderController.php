<?php

namespace App\Controller\Dashboard;
use App\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("dashboard/orders/", name="dashboard.orders.")
 */
class OrderController extends AbstractController
{
    /**
     * @Route("index", name="index")
     */
    public function index()
    {
        $orders = $this->getDoctrine()->getRepository(Order::class)->findAll();
        return $this->render('dashboard/orders/index.html.twig', [
            'orders' => $orders,
        ]);
    }

    /**
     * @Route("edit/{id}", name="edit")
     */
    public function edit(Request $request,$id)
    {
        $order = $this->getDoctrine()->getRepository(Order::class)->find($id);
        if ($order->getStatus() == 1){
            $order->setStatus(2);
        }else{
            $order->setStatus(3);
        }
        $this->getDoctrine()->getManager()->persist($order);
        $this->addFlash('success','تم تحديث الطلب بنجاح');
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('dashboard.orders.index');
    }

    /**
     * @Route("destroy/{id}", name="destroy")
     */
    public function destroy($id)
    {
        $order = $this->getDoctrine()->getRepository(Order::class)->find($id);
        $em = $this->getDoctrine()->getManager();
        $em->remove($order);
        $this->addFlash('success','تمت عملية الحذف بنجاح');
        $em->flush();

        return $this->redirectToRoute('dashboard.orders.index');
    }
}
