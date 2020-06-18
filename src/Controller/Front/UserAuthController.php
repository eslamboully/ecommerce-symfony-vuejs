<?php

namespace App\Controller\Front;

use App\Entity\Department;
use App\Entity\User;
use App\Form\UserFormType;
use App\Service\ConfigHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserAuthController extends AbstractController
{
    protected $config;
    private $encoder;

    public function __construct(ConfigHelper $configHelper,UserPasswordEncoderInterface $encoder)
    {
        $this->config = $configHelper->configHelper();
        $this->encoder = $encoder;
    }


    /**
     * @Route("/login", name="front.login", methods={"POST"})
     */
    public function login(): Response
    {

    }

    /**
     * @Route("/register", name="front.register", methods={"POST"})
     */
    public function register(Request $request): Response
    {
        $email = $this->getDoctrine()
            ->getRepository(User::class)
            ->findBy(['email' => $request->request->get('email')]);

        $validate = [];
        if (strlen($request->request->get('name')) < 2 && strlen($request->request->get('name')) < 11 ){
            array_push($validate,'الاسم مطلوب ويجب ان يكون 11 حرف ك حد اقصي');
        }
        if(strlen($request->request->get('email')) < 5 && strlen($request->request->get('email')) < 180) {
            array_push($validate,'البريد الالكتروني مطلوب');
        }
        if(strlen($request->request->get('password')) < 6 && strlen($request->request->get('password')) < 180) {
            array_push($validate,'كلمة المرور مطلوبة ولا تقل عن 6 احرف');
        }
        if(strlen($request->request->get('phone')) < 11 && strlen($request->request->get('phone')) < 13) {
            array_push($validate,'رقم الهاتف مطلوب ولا يزيد عن 11 رقم');
        }
        if(!empty($email)){
            array_push($validate,'البريد الالكتروني موجود مسبقا');
        }

        if (empty($validate)) {
            $user = new User();
            $entityManager = $this->getDoctrine()->getManager();
            $user->setName($request->request->get('name'));
            $user->setEmail($request->request->get('email'));
            $user->setPhone($request->request->get('phone'));
            $user->setType(1);
            $user->setPassword($this->encoder->encodePassword($user,$request->request->get('password')));

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->json(['data' => $user,'error' => '','status' => true]);
        }else{
            return $this->json(['data' => '','error' => $validate,'status' => false]);
        }
    }

    /**
     * @Route("/logout", name="front.logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
