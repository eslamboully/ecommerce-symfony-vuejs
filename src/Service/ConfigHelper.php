<?php
namespace App\Service;

use App\Entity\Setting;
use Doctrine\ORM\EntityManagerInterface;

class ConfigHelper {

    protected $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    public function configHelper()
    {
        $settings = $this->entityManager->getRepository(Setting::class)
            ->findAll();
        $config = [];
        foreach ($settings as $setting) {
            $config[$setting->getVar()] = $setting->getValue();
        }

        return $config;
    }
}