<?php
namespace App\Controller\Front;

use App\Entity\Cart;
use App\Entity\Color;
use App\Entity\Department;
use App\Entity\Love;
use App\Entity\Product;
use App\Entity\Trademark;
use App\Entity\User;
use App\Service\ConfigHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class FrontController extends AbstractController{

    protected $config;

    public function __construct(ConfigHelper $configHelper)
    {
        $this->config = $configHelper->configHelper();
    }
    /**
     * @Route("/", name="front.index")
     */
    public function index()
    {
        $categories = $this->getDoctrine()->getRepository(Department::class)->findBy(['parent'=>null]);
        $cart = $this->getDoctrine()->getRepository(Cart::class)->findOneBy(['User' => $this->getUser()]);

        $cart_count = $cart ? count($cart->getProduct()) : 0;

        return $this->render('front/index.html.twig',[
            'categories'=>$categories,
            'config'=>$this->config,
            'cart_count' => $cart_count,
        ]);
    }

    /**
     * @Route("/category/{id}/{title?}", name="front.category")
     */
    public function category($id)
    {
        $categories = $this->getDoctrine()->getRepository(Department::class)->findBy(['parent'=>null]);
        $cart = $this->getDoctrine()->getRepository(Cart::class)->findOneBy(['User' => $this->getUser()]);
        $cart_count = $cart ? count($cart->getProduct()) : 0;

        return $this->render('front/index.html.twig',[
            'categories'=>$categories,
            'config'=>$this->config,
            'cart_count' => $cart_count,
        ]);
    }

    /**
     * @Route("/product/{id}/{title?}", name="front.product")
     */
    public function product($id)
    {
        $categories = $this->getDoctrine()->getRepository(Department::class)->findBy(['parent'=>null]);
        $cart = $this->getDoctrine()->getRepository(Cart::class)->findOneBy(['User' => $this->getUser()]);
        $cart_count = $cart ? count($cart->getProduct()) : 0;

        return $this->render('front/index.html.twig',[
            'categories'=>$categories,
            'config'=>$this->config,
            'cart_count' => $cart_count,
        ]);
    }


    /**
     * @Route("/cart", name="front.cart")
     */
    public function cart()
    {
        $categories = $this->getDoctrine()->getRepository(Department::class)->findBy(['parent'=>null]);
        $cart = $this->getDoctrine()->getRepository(Cart::class)->findOneBy(['User' => $this->getUser()]);
        $cart_count = $cart ? count($cart->getProduct()) : 0;

        return $this->render('front/index.html.twig',[
            'categories'=>$categories,
            'config'=>$this->config,
            'cart_count' => $cart_count,
        ]);
    }

    /**
     * @Route("/profile", name="front.profile")
     */
    public function profile()
    {
        $user = $this->getUser();

        if ($user){
            $userJson = [];
            $userJson['id'] = $user->getId();
            $userJson['email'] = $user->getUsername();
            return $this->json([
                'user' => $userJson,
            ]);
        }
        return $this->json([
            'user' => null,
        ]);

    }

    /**
     * @Route("/api/latest/products", name="api.latest.products", methods={"POST"})
     * @return JsonResponse
     */
    public function latest_products()
    {
        $latest_products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getLatestProduct();
        return new JsonResponse(['data'=> $latest_products]);
    }
    /**
     * @Route("/api/products", name="api.products", methods={"post"})
     * @return JsonResponse
     */
    public function products()
    {
        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getProducts();

        return new JsonResponse(['data'=> $products]);
    }

    /**
     * @Route("/api/more/products/{skipNumber?}", name="api.more.products", methods={"post"})
     * @return JsonResponse
     */
    public function more_products($skipNumber = 8)
    {
        $more_products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getMoreProducts($skipNumber);
        return new JsonResponse(['data'=> $more_products]);
    }

    /**
     * @Route("/api/category/{id}", name="api.category", methods={"post","GET"})
     * @return JsonResponse
     */
    public function getCategory($id)
    {
        $parentCategory = $this->getDoctrine()
            ->getRepository(Department::class)
            ->find($id)->getParent();

        $category = $this->getDoctrine()
            ->getRepository(Department::class)
            ->getCategory($id);

        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getArrByCategoryId($id);


        $categories = $this->getDoctrine()
            ->getRepository(Department::class)
            ->getCategories($parentCategory);

        $colors = $this->getDoctrine()
            ->getRepository(Color::class)
            ->getColors();

        $trademarks = $this->getDoctrine()
            ->getRepository(Trademark::class)
            ->getTrademarks();

        return new JsonResponse([
            'category'=> $category,
            'products'=>$products,
            'categories' => $categories,
            'colors' => $colors,
            'trademarks' => $trademarks,
            ]);
    }

    /**
     * @Route("/api/more/specific/products/{id}/{skipNumber?}", name="api.more.specific.products", methods={"post"})
     * @return JsonResponse
     */
    public function more_specific_products($id,$skipNumber = 6)
    {
        $department = $this->getDoctrine()
            ->getRepository(Department::class)
            ->getCategory($id);

        $more_products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getMoreSpecificProducts($department,$skipNumber);
        return new JsonResponse(['data'=> $more_products]);
    }

    /**
     * @Route("/api/product/{id}", name="api.product")
     */
    public function api_products($id)
    {
        $product = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getProduct($id);


        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getRelatedProduct($product[0]['Department']['id']);

        return new JsonResponse(['product' => $product,'products' => $products]);
    }

    /**
     * @Route("/api/create/love/{id}", name="api.create.love")
     */
    public function api_create_love($id)
    {
        $product = $this->getDoctrine()
            ->getRepository(Product::class)
            ->find($id);

        $user = $this->getUser();

        $love = $this->getDoctrine()->getRepository(Love::class)->findOneBy(['Product' => $product,'User' => $user]);

        if ($love == null) {
            $love = new Love();
            $love->setLove(true);
            $love->setProduct($product);
            $love->setUser($user);
            $this->getDoctrine()->getManager()->persist($love);
            $this->getDoctrine()->getManager()->flush();

            return new JsonResponse(['love' => 'love success']);
        }else{
            $this->getDoctrine()->getManager()->remove($love);
            $this->getDoctrine()->getManager()->flush();

            return new JsonResponse(['love' => 'love remove']);
        }

    }

    /**
     * @Route("/api/loves/{id}", name="api.loves")
     */
    public function api_loves()
    {
        $user = $this->getUser();

        $loves = $this->getDoctrine()->getRepository(Love::class)->getLoves($user);

        return new JsonResponse(['love' => $loves]);
    }

    /**
     * @Route("/api/cart/{id}", name="api.cart")
     */
    public function api_cart($id,Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $product = $entityManager->getRepository(Product::class)->find($id);
        $user = $this->getUser();
        $cart = $entityManager->getRepository(Cart::class)->findOneBy(['User' => $user]);

        if ($cart) {
            $cart->addProduct($product);
            $entityManager->persist($cart);
            $entityManager->flush();
        }else{
            $cart = new Cart();
            $cart->setUser($user);
            $cart->addProduct($product);
            $entityManager->persist($cart);
            $entityManager->flush();
        }

        return $this->json(['data' => '', 'error'=>'', 'status'=>true]);
    }
    /**
     * @Route("/api/own/cart", name="api.own.cart")
     */
    public function api_own_cart()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $cart = $entityManager->getRepository(Cart::class)->getCart($this->getUser());

        if (!empty($cart)) {
            $cart = $cart[0];
        }else{
            $cart = null;
        }

        return $this->json(['cart' => $cart]);
    }
}