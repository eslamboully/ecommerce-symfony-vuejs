<?php

namespace App\Controller\Dashboard;

use App\Entity\Setting;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class HomeController extends AbstractController
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     * @Route("/dashboard/", name="dashboard.index")
     */
    public function index()
    {
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/dashboard/settings", name="dashboard.settings", methods={"GET","POST"})
     */
    public function getSettings(Request $request)
    {
        $entityManager = $this->getDoctrine();
        $settings = $entityManager->getRepository(Setting::class)->findAll();

        if ($request->isMethod('POST'))
        {
            $requestDataSettings = $request->request->get('settings');
            $requestFileSettings = $request->files->get('settings');
            foreach ($requestDataSettings as $index=>$requestSetting)
            {
                $element = $entityManager->getRepository(Setting::class)
                    ->findOneBy(['var' => $index]);

                $element->setValue($requestSetting);
                $entityManager->getManager()->persist($element);
            }

                foreach ($requestFileSettings as $index=>$requestFileSetting)
                {
                    if ($requestFileSetting !== null) {
                        $element = $entityManager->getRepository(Setting::class)
                            ->findOneBy(['var' => $index]);

                        $icon = $requestFileSetting;
                        $originalFilename = pathinfo($icon->getClientOriginalName(), PATHINFO_FILENAME);

                        $safeFilename = $this->slugger->slug($originalFilename);
                        $newLogoName = $safeFilename.'-'.uniqid().'.'.$icon->guessExtension();
                        try {
                            $icon->move(
                                $this->getParameter('uploads_settings'),
                                $newLogoName
                            );
                        } catch (FileException $e) {
                            new \Exception('فيه مشكلة ف نقل الملف تقريبا الصلاحيات بتاعة السيرفر ابقا روح بص عليها');
                        }
                        $element->setValue($newLogoName);
                        $entityManager->getManager()->persist($element);
                    }
                }

            $this->addFlash('success','تم تحديث الاعدادات بنجاح');
            $entityManager->getManager()->flush();

            return $this->redirectToRoute('dashboard.settings');
        }
        return $this->render('dashboard/settings.html.twig', [
            'settings' => $settings,
        ]);
    }

}
